import { fetchUserProfile } from '../../api/spotifyConsumer/auth/spotifyAuth'
import { actionTypes } from '../types/actiosTypes'

export const useProfile = (dispatch) => {
  const getSpotifyProfile = async () => {
    try {
      const accessToken = localStorage.getItem('spotifyAccessToken');
      const tokenExpiration = localStorage.getItem('spotifyTokenExpiration');

      console.log('Token de acceso desde useProfile :', accessToken);
      console.log('Expiración del token desde useProfile:', tokenExpiration);

      if (!accessToken || Date.now() > parseInt(tokenExpiration, 10)) {
        localStorage.removeItem('spotifyAccessToken');
        localStorage.removeItem('spotifyRefreshToken');
        localStorage.removeItem('spotifyTokenExpiration');
        localStorage.removeItem('userlogin');
        localStorage.removeItem('logged');
        throw new Error('El token de acceso ha expirado. Por favor, inicia sesión nuevamente.');
      }

      const userProfile = await fetchUserProfile(accessToken);
      console.log('Perfil de usuario desde useProfile:', userProfile);

      // Despacha el perfil al estado global
      dispatch({
        type: actionTypes.SET_PROFILE,
        payload: {
          email: userProfile.email,
          firstName: userProfile.display_name,
          profilePicture: userProfile.images?.[0]?.url || '',
          followers: userProfile.followers?.total || 0,
          subscription: userProfile.product || 'free',
        },
      });

      // Devuelve el perfil del usuario
      return userProfile;
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener el perfil del usuario en getSpotifyProfile.',
      });
      throw error;
    }
  };


  // Función para actualizar el perfil desde UserProvider
  const setProfile = (profile) => {
    console.log(profile)
    dispatch({
      type: 'SET_PROFILE',
      payload: profile,
    });
  };

  return { getSpotifyProfile,setProfile };
};