import { fetchUserProfile, getSpotifyArtistsFollowers } from '../../api/spotifyConsumer/auth/spotifyAuth'
import { actionTypes } from '../types/actionsTypes'

export const useProfile = (dispatch) => {

  const getSpotifyProfile = async () => {
    try {
      const accessToken = validateAccessToken();
      const userProfile = await fetchUserProfile(accessToken);
      const artistsFollowers = await getSpotifyArtistsFollowers(accessToken);

      console.log('Perfil de usuario desde useProfile:', userProfile);

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


  const setProfile = (profile) => {
    console.log("log desde ser profile ----------------", profile)
    dispatch({
      type: actionTypes.SET_PROFILE,
      payload: profile,
    });
  };

  const syncUserStateWithLocalStorage = () => {
    const storedUser = localStorage.getItem('userlogin');
    const isLogged = localStorage.getItem('logged') === 'true';

    if (storedUser && isLogged) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch({
          type: actionTypes.SET_PROFILE,
          payload: parsedUser,
        });
      } catch (error) {
        console.error('Error al recuperar los datos del usuario desde localStorage:', error);
        clearLocalStorage();
      }
    }
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