import { fetchUserProfile, redirectToSpotifyLogin, exchangeCodeForToken } from '../../api/spotifyConsumer/auth/spotifyAuth'
import { authTypes } from '../types/authTypes'

export const useAuthenticate = (dispatch) => {
  // login
  const login = (userData) => {
    const action = {
      type: authTypes.login,
      payload: userData
    };
    console.log('Login action:', action);
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
    localStorage.removeItem('userlogin');
    localStorage.removeItem('logged');

    dispatch({ type: authTypes.logout });
  };

  // Login con Spotify
  const loginWithSpotify = async () => {
    try {
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


  return { login, logout, loginWithSpotify,logoutWithSpotify}};
