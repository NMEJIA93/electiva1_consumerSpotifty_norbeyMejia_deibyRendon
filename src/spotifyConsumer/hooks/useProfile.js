import {
  fetchUserProfile,
  getSpotifyArtistsFollowers,
  getSpotifyPlaylistsUser,
  getSpotifyArtistTopUser,
  getSpotifyTrackTopsUser,
  getTracks,
  unfollowPlalist,
  followPlaylist
} from '../../api/spotifyConsumer/auth/spotifyAuth'

import { doc, setDoc, collection, addDoc } from "firebase/firestore/lite";
import { FirebaseDb } from '../../firebase/firebaseConfig'
import { useManagementLocalStorage } from '../../hooks/useManagementLocalStorage'
import { actionTypes } from '../types/actionsTypes'
import { structUserProfile } from '../../utils/structUserProfile'

export const useProfile = (dispatch) => {
  const { clearLocalStorage } = useManagementLocalStorage();

  const saveProfileFirebase = async (profile) => {
    try {
      const profileId = profile.uid || profile.id;
      if (!profileId) {
        throw new Error('El perfil no tiene un uid válido.');
      }
      /*
      const colRef = collection(FirebaseDb, 'profiles', profileId, 'profile');
      const docRef = await addDoc(colRef, profile);
  
      await setDoc(docRef, { ...profile, id: profileId }, { merge: true });
  */
      const docRef = doc(FirebaseDb, 'profiles', profileId);
      await setDoc(docRef, { ...profile, id: profileId }, { merge: true });

      dispatch({
        type: actionTypes.SAVE_PROFILE,
        payload: { ...profile, id: profileId },
      });
      console.log('***********Guardando perfil en Firebase:******************\n', profileId);
      console.log('***********documento:******************\n', docRef);

    } catch (error) {
      console.log('***********Error al guardar el perfil en Firebase:******************\n', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al guardar el perfil en Firebase.',
      });
    }
  }

    const savePlaylistFirebase = async (playlist) => {
    try {
      const playlistId = playlist.uid || playlist.id;
      if (!playlistId) {
        throw new Error('PlayList no valida');
      }

      const docRef = doc(FirebaseDb, 'playlist', playlistId);
      await setDoc(docRef, { ...playlist, id: playlistId }, { merge: true });

      dispatch({
        type: actionTypes.SAVE_PLAYLIST,
        payload: { ...playlist, id: playlistId },
      });
      console.log('***********Guardando perfil en Firebase:******************\n', playlistId);
      console.log('***********documento:******************\n', docRef);

    } catch (error) {
      console.log('***********Error al guardar el perfil en Firebase:******************\n', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al guardar el playlist en Firebase.',
      });
    }
  }

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
        uid: userProfile.uid,
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

      localStorage.setItem('userlogin', JSON.stringify(user));
      localStorage.setItem('logged', 'true');

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

    // Guardar cada playlist individualmente
    for (const playlist of ownPlaylists) {
      await savePlaylistFirebase(playlist);
    }
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

   const setSpotifyTracksPlaylist = async (accessToken, href) => {
    try{
      const tracks = await getTracks(accessToken, href);

      const trackPlylist = tracks.items.map(item => ({
        title: item.track.name,
        artist: item.track.artists.map(artist => artist.name).join(', '),
        album: item.track.album.name,
        duration: msToMinutesAndSeconds(item.track.duration_ms),
    }));
    console.log("trackPlylist", trackPlylist)
      return trackPlylist;

    } catch (error) { 
      console.error('Error al obtener las canciones de la playlist:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener las canciones de la playlist.',
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

  const unfollowPlaylistAndRefresh = async (playlistId) => {
  try {
    const accessToken = validateAccessToken();
    await unfollowPlalist(accessToken, playlistId);
    await getSpotifyProfile();; // Esto actualizará el contexto global y las playlists
  } catch (error) {
    console.error('Error al dejar de seguir y refrescar el perfil:', error);
    dispatch({
      type: actionTypes.SET_ERROR,
      payload: 'Error al dejar de seguir la playlist.',
    });
    throw error;
  }
};

const followPlaylistAndRefresh = async (playlistId) => {
  try {
    const accessToken = validateAccessToken();
    await followPlaylist(accessToken, playlistId);
    await getSpotifyProfile(); // Esto actualizará el contexto global y las playlists
  } catch (error) {
    console.error('Error al seguir la playlist y refrescar el perfil:', error);
    dispatch({
      type: actionTypes.SET_ERROR,
      payload: 'Error al seguir la playlist.',
    });
    throw error;
  }
};



  return { getSpotifyProfile, setProfile, syncUserStateWithLocalStorage, saveProfileFirebase , unfollowPlaylistAndRefresh , followPlaylistAndRefresh , setSpotifyTracksPlaylist};

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

