import { useNavigate } from 'react-router-dom';
import { fetchUserProfile, redirectToSpotifyLogin, exchangeCodeForToken } from '../../api/spotifyConsumer/auth/spotifyAuth'
import { authTypes } from '../types/authTypes'
import { signInWithGoogle, signInWithFacebook } from '../services/authService'
import { useProfile } from '../../spotifyConsumer/hooks/useProfile'
import { useManagementLocalStorage } from '../../hooks/useManagementLocalStorage'

export const useAuthenticate = (dispatch) => {
  const { clearLocalStorage } = useManagementLocalStorage();
  const navigate = useNavigate();
  const { syncUserStateWithLocalStorage, setProfile } = useProfile(dispatch);


  const onCancel = () => {
    navigate('/', { replace: true });
  };

  const onLoginUser = () => {
    navigate('/', { replace: true });
  };

  const handleGoogleCallback = async (setError) => {
    try {
      const user = await signInWithGoogle();
      //console.log('Usuario autenticado----------:', user);

      const userData = {
        country: user.country || 'CO',
        email: user.email,
        firstName: user.displayName || 'Name',
        profilePicture: user.images?.[0]?.url || '',
        followers: user.followers?.total || 0,
        subscription: user.product || 'free',
        profileLink: user.external_urls?.spotify || '',
        type: user.type || 'user',
        id: user.id || 'user',
        artistsFollowers: user.artists?.items || [],
        ownPlaylists: user.ownPlaylists || [],
        followedPlaylists: user.followedPlaylists || [],
        connectWithSpotify: false,
      }
      console.log('Objeto de usuario:', userData);
      login(userData);
      localStorage.setItem('userlogin', JSON.stringify(userData));
      localStorage.setItem('logged', true);

      setProfile(userData);

      navigate('/userpage');

    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      setError('No se pudo iniciar sesión con Google. Inténtalo de nuevo.');
    }
  };

  const onLoginWithFacebook = async (setError) => {
    try {
      const user = await signInWithFacebook();
      console.log('Usuario autenticado con Facebook:', user);

      const userData = {
        country: user.country || 'CO',
        email: user.email,
        firstName: user.displayName || 'Name',
        profilePicture: user.images?.[0]?.url || '',
        followers: user.followers?.total || 0,
        subscription: user.product || 'free',
        profileLink: user.external_urls?.spotify || '',
        type: user.type || 'user',
        id: user.id || 'user',
        artistsFollowers: user.artists?.items || [],
      }
      console.log('Objeto de usuario:', userData);
      login(userData);
      localStorage.setItem('userlogin', JSON.stringify(userData));
      localStorage.setItem('logged', true);

      setProfile(userData);

      navigate('/userpage');

    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
      setError('No se pudo iniciar sesión con Facebook. Inténtalo de nuevo.');
    }
  };

  const onNavigateToRegister = () => {
    navigate('/register', { replace: true });
  };

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
    console.log('Logout action');
    clearLocalStorage();

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




  return {
    login,
    logout,
    loginWithSpotify,
    logoutWithSpotify,
    onCancel,
    onLoginUser,
    handleGoogleCallback,
    onLoginWithFacebook,
    onNavigateToRegister,
  };
};