import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

/**
 * Autentica a un usuario con Google utilizando Firebase Authentication.
 * @param {Object} response - Respuesta del inicio de sesión de Google.
 * @returns {Object} - Usuario autenticado.
 * @throws {Error} - Error durante la autenticación.
 */
export const authenticateWithGoogle = async (response) => {
    try {
        // Obtén las credenciales de Google
        const credential = GoogleAuthProvider.credential(response.credential);

        // Autentica al usuario con Firebase
        const userCredential = await signInWithCredential(auth, credential);
        return userCredential.user; // Devuelve el usuario autenticado
    } catch (error) {
        console.error('Error al autenticar con Google:', error);
        throw error; // Lanza el error para manejarlo en el componente
    }
};

/**
 * Alias para authenticateWithGoogle.
 * @param {Object} response - Respuesta del inicio de sesión de Google.
 * @returns {Object} - Usuario autenticado.
 */
export const handleLoginWithGoogle = async (response) => {
    return await authenticateWithGoogle(response);
};