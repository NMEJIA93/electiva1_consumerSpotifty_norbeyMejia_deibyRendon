import {fetchUserProfile} from '../../api/spotifyConsumer/auth/spotifyAuth'

import {actionTypes} from '../types/actiosTypes'

export const useProfile =(dispatch) =>{
  const getSpotifyUser = async () => {
    try {
      const accessToken = localStorage.getItem('spotifyAccessToken');
      const tokenExpiration = localStorage.getItem('spotifyTokenExpiration');
  
      if (!accessToken || Date.now() > parseInt(tokenExpiration, 10)) {
        throw new Error('El token de acceso ha expirado. Por favor, inicia sesión nuevamente.');
      }
  
      const userProfile = await fetchUserProfile(accessToken);
  
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
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error al obtener el perfil del usuario.',
      });
      throw error;
    }
  };

  return { getSpotifyUser };
};