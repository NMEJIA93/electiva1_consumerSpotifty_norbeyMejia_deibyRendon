// filepath: /Users/deibyrendon/Documents/Universidad /electiva1/spotify/electiva1_consumerSpotifty_norbeyMejia_deibyRendon/src/auth/hooks/useAuthActions.js
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signInWithFacebook } from '../services/authService';

export const useAuthActions = () => {
    const navigate = useNavigate();

    const onCancel = () => {
        navigate('/', { replace: true });
    };

   const onLoginUser = () => {
        //console.log('Iniciar sesión como Usuario', { email, password });
        navigate('/userpage', { replace: true });
    };
    
/*
    const handleGoogleCallback = async (setError) => {
        try {
            const user = await signInWithGoogle();
            console.log('Usuario autenticado:', user);
            navigate('/userpagelogin'); // Redirige al usuario a la página de usuario
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error);
            setError('No se pudo iniciar sesión con Google. Inténtalo de nuevo.');
        }
    };

  */

    const onLoginWithFacebook = async (setError) => {
        try {
            const user = await signInWithFacebook();
            console.log('Usuario autenticado con Facebook:', user);
            navigate('/userpagelogin'); // Redirige al usuario a la página de usuario
        } catch (error) {
            console.error('Error al iniciar sesión con Facebook:', error);
            setError('No se pudo iniciar sesión con Facebook. Inténtalo de nuevo.');
        }
    };
  

    const onNavigateToRegister = () => {
        navigate('/register', { replace: true });
    };

    return {
        onCancel,
        onLoginUser,
        //handleGoogleCallback,
        onLoginWithFacebook,
        //onLoginWithSpotify,
        onNavigateToRegister,
    };
};