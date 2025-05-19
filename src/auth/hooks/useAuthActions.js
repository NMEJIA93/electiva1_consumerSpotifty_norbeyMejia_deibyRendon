// filepath: /Users/deibyrendon/Documents/Universidad /electiva1/spotify/electiva1_consumerSpotifty_norbeyMejia_deibyRendon/src/auth/hooks/useAuthActions.js
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signInWithFacebook } from '../services/authService';

export const useAuthActions = () => {
    const navigate = useNavigate();

    const onCancel = () => {
        navigate('/', { replace: true });
    };

   const onLoginUser = () => {
        navigate('/userpage', { replace: true });
    };
  /*
    const onLoginWithFacebook = async (setError) => {
        try {
            const user = await signInWithFacebook();
            console.log('Usuario autenticado con Facebook:', user);
            navigate('/userpagelogin'); 
        } catch (error) {
            console.error('Error al iniciar sesión con Facebook:', error);
            setError('No se pudo iniciar sesión con Facebook. Inténtalo de nuevo.');
        }
    };

    */

    const onNavigateToRegister = () => {
        navigate('/register', { replace: true });
    };

    return {
        onCancel,
        onLoginUser,
        //onLoginWithFacebook,
        onNavigateToRegister,
    };
};