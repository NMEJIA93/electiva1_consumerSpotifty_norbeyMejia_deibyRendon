import {
  fetchUserProfile,
  getSpotifyArtistsFollowers,
  getSpotifyPlaylistsUser,
  getSpotifyArtistTopUser,
  getSpotifyTrackTopsUser
} from '../../api/spotifyConsumer/auth/spotifyAuth'

import { actionTypes } from '../types/actionsTypes'

export const useProfile = (dispatch) => {

  const getSpotifyPlaylistsUser2 = async () => {
    try {
      const accessToken = validateAccessToken();
      const userProfile = await fetchUserProfile(accessToken);
      const userID = userProfile.id;
      const playlists = await getSpotifyPlaylistsUser(accessToken);


      const playlistsPropias = playlists.items.filter(playlist => playlist.owner.id === userID);
      console.log('Playlists propias:', playlistsPropias);

    } catch (error) {
      console.error('Error al obtener play list del usuario del usuario:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener el perfil del usuario en getSpotifyProfile.',
      });
      throw error;
    }
  }

  const getSpotifyProfile = async () => {
    try {
      const accessToken = validateAccessToken();
      const userProfile = await fetchUserProfile(accessToken);
      const artistsFollowers = await getSpotifyArtistsFollowers(accessToken);
      const playlists = await getSpotifyPlaylistsUser(accessToken);
      const artistsTop = await setSpotifyArtistTopUser(accessToken);
      const tracksTop = await setSpotifyTrackTopsUser(accessToken);

      console.log('Canciones más escuchados:///////////////////////////////////', tracksTop);

      const userID = userProfile.id;
      const ownPlaylists = playlists.items.filter(playlist => playlist.owner.id === userID);
      const followedPlaylists = playlists.items.filter(playlist => playlist.owner.id !== userID);



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
        artistsFollowers: artistsFollowers.artists.items || [],
        ownPlaylists: ownPlaylists || [],
        followedPlaylists: followedPlaylists || [],
        connectWithSpotify: true,
        artistsTop: artistsTop || [],
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
      console.log('');
      console.log('');
      console.log('');
      console.log('');

      console.log('Canciones más escuchados:*******************************', tracks);
      console.log('');
      console.log('');
      console.log('');
      console.log('');

      const trackTop = tracks.items.map(item => ({
        name: item.track.name,
        artist: item.track.artists.map(artist => artist.name).join(', '),
        duration: item.track.duration_ms,

      }));
      console.log('Canciones más escuchados:///////////////////////////////////', trackTop);
      console.log('');
      console.log('');
      console.log('');
      console.log('');
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

  const clearLocalStorage = () => {
    localStorage.removeItem('spotifyAccessToken');
    localStorage.removeItem('spotifyRefreshToken');
    localStorage.removeItem('spotifyTokenExpiration');
    localStorage.removeItem('userlogin');
    localStorage.removeItem('logged');
  };

  return { getSpotifyProfile, setProfile, syncUserStateWithLocalStorage };
};