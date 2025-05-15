import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, fetchSignInMethodsForEmail, EmailAuthProvider, linkWithCredential } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user; 
    } catch (error) {
        console.error('Error during Google sign-in:', error);
        throw error;
    }
};

export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error during email/password registration:', error);
        throw error;
    }
};

export const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return user;
    } catch (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
            const email = error.customData.email;
            const pendingCredential = FacebookAuthProvider.credentialFromError(error);

            const signInMethods = await fetchSignInMethodsForEmail(auth, email);

            if (signInMethods.includes(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)) {
                throw new Error('Por favor, inicia sesión con tu correo y contraseña.');
            } else if (signInMethods.includes(GoogleAuthProvider.PROVIDER_ID)) {
                const googleProvider = new GoogleAuthProvider();
                const googleResult = await signInWithPopup(auth, googleProvider);
                await linkWithCredential(googleResult.user, pendingCredential);
                return googleResult.user;
            } else {
                throw new Error(
                    `El correo electrónico ${email} ya está asociado con otro proveedor. Por favor, inicia sesión con ese proveedor.`
                );
            }
        } else {
            console.error('Error during Facebook sign-in:', error);
            throw error;
        }
    }
};