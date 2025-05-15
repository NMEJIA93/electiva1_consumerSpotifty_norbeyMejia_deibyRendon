import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Usuario autenticado:", user);
        return user;
    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
        throw error;
    }
};