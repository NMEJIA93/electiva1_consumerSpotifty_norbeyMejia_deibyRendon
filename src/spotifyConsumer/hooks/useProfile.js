import {
  fetchUserProfile,
  getSpotifyArtistsFollowers,
  getSpotifyPlaylistsUser,
  getSpotifyArtistTopUser,
  getSpotifyTrackTopsUser
} from '../../api/spotifyConsumer/auth/spotifyAuth'

import {useManagementLocalStorage} from '../../hooks/useManagementLocalStorage'

import { actionTypes } from '../types/actionsTypes'

export const useProfile = (dispatch) => {
  const { clearLocalStorage } = useManagementLocalStorage();

  const getSpotifyProfile = async () => {
    try {
      const accessToken = validateAccessToken();
      const userProfile = await fetchUserProfile(accessToken);
      const artistsFollowers = await setSpotifyArtistsFollowers(accessToken);
      const { ownPlaylists, followedPlaylists } = await setSpotifyPlaylistsUser(accessToken, userProfile.id);
      const artistsTop = await setSpotifyArtistTopUser(accessToken);
      const tracksTop = await setSpotifyTrackTopsUser(accessToken);
      const favoriteGenres = getFavoriteGenres(artistsTop);
      

      const user = {
        country: userProfile.country,
        email: userProfile.email,
        firstName: userProfile.display_name,
        profilePicture: userProfile.images?.[0]?.url || '',
        followers: userProfile.followers?.total || 0,
        subscription: userProfile.product || 'free',
        profileLink: userProfile.external_urls?.spotify || '',
        type: userProfile.type || 'user',
        id: userProfile.id || 'user',
        artistsFollowers: artistsFollowers || [],
        ownPlaylists: ownPlaylists || [],
        followedPlaylists: followedPlaylists || [],
        connectWithSpotify: true,
        artistsTop: artistsTop || [],
        tracksTop: tracksTop || [],
        favoriteGenres: favoriteGenres || [],
      }

      dispatch({
        type: actionTypes.SET_PROFILE,
        payload: user,
      });

      console.log('Perfil de usuario después de la actualización:', user);
      return user;

    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener el perfil del usuario en getSpotifyProfile.',
      });
      throw error;
    }
  };

  const setSpotifyArtistsFollowers = async (accessToken) => {
    try {
      const artistsFollowers = await getSpotifyArtistsFollowers(accessToken);
      return artistsFollowers.artists.items;
    } catch (error) {
      console.error('Error al obtener los artistas seguidos:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener los artistas seguidos.',
      });
      throw error;
    }
  }

  const setSpotifyPlaylistsUser = async (accessToken, UserId) => {
    try {
      const playlists = await getSpotifyPlaylistsUser(accessToken);
      const ownPlaylists = playlists.items.filter(playlist => playlist.owner.id === UserId);
      const followedPlaylists = playlists.items.filter(playlist => playlist.owner.id !== UserId);

      return { ownPlaylists, followedPlaylists };

    } catch (error) {
      console.error('Error al obtener las play list del usuario:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener las play list del usuario.',
      });
      throw error;
    }

  }

  const setSpotifyArtistTopUser = async (accessToken) => {
    try {
      const artistTop = await getSpotifyArtistTopUser(accessToken);

      const artists = artistTop.items.map(artist => ({
        name: artist.name,
        image: artist.images?.[0]?.url || '',
        followers: artist.followers?.total || 0,
        genres: artist.genres || [],
        popularity: artist.popularity || 0,
        id: artist.id || 'artist',
        profileLink: artist.external_urls?.spotify || '',
      }));

      return artists;

    } catch (error) {
      console.error('Error al obtener los artistas más escuchados del usuario:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener los artistas más escuchados del usuario.',
      });
      throw error;
    }

  }

  const setSpotifyTrackTopsUser = async (accessToken) => {
    try {
      const tracks = await getSpotifyTrackTopsUser(accessToken);
      console.log('Tracks:', tracks);

      const trackTop = tracks.items.map(item => ({
        name: item.track.name,
        artist: item.track.artists.map(artist => artist.name).join(', '),
        duration: msToMinutesAndSeconds(item.track.duration_ms),
        album: item.track.album.name,
        image: item.track.album.images?.[0]?.url || '',
        link: item.track.external_urls?.spotify || '',

      }));

      return trackTop;

    } catch (error) {
      console.error('Error al obtener las canciones más escuchadas del usuario:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener las canciones más escuchadas del usuario.',
      });
      throw error;
    }
  }

  const setProfile = (profile) => {
    console.log("log desde ser profile ----------------", profile)
    dispatch({
      type: actionTypes.SET_PROFILE,
      payload: profile,
    });
  };

  const syncUserStateWithLocalStorage = async () => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      updateGlobalStateWithUser(storedUser);
    }
  };

  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('userlogin');
    const isLogged = localStorage.getItem('logged') === 'true';
    return storedUser && isLogged ? JSON.parse(storedUser) : null;
  };

  const updateGlobalStateWithUser = (user) => {
    dispatch({
      type: actionTypes.SET_PROFILE,
      payload: user,
    });
  };

  const validateAccessToken = () => {
    const accessToken = localStorage.getItem('spotifyAccessToken');
    const tokenExpiration = localStorage.getItem('spotifyTokenExpiration');

    if (!accessToken || Date.now() > parseInt(tokenExpiration, 10)) {
      clearLocalStorage();
      throw new Error('El token de acceso ha expirado. Por favor, inicia sesión nuevamente.');
    }

    return accessToken;
  };



  return { getSpotifyProfile, setProfile, syncUserStateWithLocalStorage };
};

const msToMinutesAndSeconds = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  // Asegura que los segundos siempre tengan dos dígitos
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};


const getFavoriteGenres = (artistsTop) => {

  const allGenres = artistsTop.flatMap(artist => artist.genres || []);
  const uniqueGenres = [...new Set(allGenres)];
  return uniqueGenres;

};

