import { fetchUserProfile, redirectToSpotifyLogin, exchangeCodeForToken } from '../../api/spotifyConsumer/auth/spotifyAuth'
import { authTypes } from '../types/authTypes'
export const useAuthenticate = (dispatch) => {
  // login
  const login = (userData) => {
    const action = {
      type: authTypes.login,
      payload: userData
    };
    dispatch(action);
  };


  // logout
  const logout = () => {
    const action = {
      type: authTypes.logout,
    };
    dispatch(action);
  };


  // Logout
  const logoutWithSpotify = () => {
    localStorage.removeItem('spotifyAccessToken');
    localStorage.removeItem('spotifyRefreshToken');
    localStorage.removeItem('spotifyTokenExpiration');
    dispatch({ type: authTypes.logout });
  };

  // Login con Spotify
  const loginWithSpotify = async () => {
    try {
      console.log('Redirigiendo al flujo de autenticación de Spotify...');
      await redirectToSpotifyLogin();
    } catch (error) {
      console.error('Error en el flujo de autenticación:', error);
      dispatch({
        type: authTypes.errors,
        payload: { errorMessage: 'Error al redirigir al flujo de autenticación de Spotify.' },
      });
      throw error;
    }
  };

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
      login({
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

  return { login, logout, loginWithSpotify, getSpotifyUser };
};