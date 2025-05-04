import {fetchUserProfile} from '../../api/spotifyConsumer/auth/spotifyAuth'

import {actionTypes} from '../types/actiosTypes'

export const useProfile =(dispatch) =>{
// Get Profile
const getProfile = (userData) =>{
    const action = {
        type: actionTypes.GET_PROFILE,
        payload: userData
    };
    dispatch(action)
}


// Obtener perfil del usuario desde Spotify
  const getSpotifyUser = async () => {
    try {
      const accessToken = localStorage.getItem('spotifyAccessToken');
      const tokenExpiration = localStorage.getItem('spotifyTokenExpiration');
  
      // Verifica si el token ha expirado
      if (!accessToken || Date.now() > parseInt(tokenExpiration, 10)) {
        throw new Error('El token de acceso ha expirado. Por favor, inicia sesión nuevamente.');
      }
  
      const userProfile = await fetchUserProfile(accessToken);
  
      // Actualiza el estado global
      getProfile({
        email: userProfile.email,
        firstName: userProfile.display_name,
        profilePicture: userProfile.images?.[0]?.url || '',
        followers: userProfile.followers?.total || 0,
        subscription: userProfile.product || 'free',
      });
  
      // Devuelve los datos del usuario
      return {
        email: userProfile.email,
        firstName: userProfile.display_name,
        profilePicture: userProfile.images?.[0]?.url || '',
        followers: userProfile.followers?.total || 0,
        subscription: userProfile.product || 'free',
      };
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
      dispatch({
        type: authTypes.errors,
        payload: { errorMessage: 'Error al obtener el perfil del usuario.' },
      });
      throw error; // Lanza el error para que el componente lo maneje
    }
  };

  return { getProfile, getSpotifyUser };
};