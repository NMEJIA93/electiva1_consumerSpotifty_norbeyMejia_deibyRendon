import { useState } from 'react';
import { useAuthActions } from '../hooks/useAuthActions';
import bgBackground from '../../assets/bgBlackColor.png';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export const LoginPage = () => {
    const { loginWithSpotify } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {
        onCancel,
        onLoginUser,
        handleGoogleCallback,
        onLoginWithFacebook,
        onNavigateToRegister,
    } = useAuthActions();

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-spotify-black text-white"
            style={{ backgroundImage: `url(${bgBackground})` }}
        >
            <div className="bg-spotify-darkGray p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-8 text-center">Iniciar Sesión</h1>
                <div className="space-y-4">
                    <div>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-spotify-black text-white border border-spotify-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-spotify-green"
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-spotify-black text-white border border-spotify-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-spotify-green"
                            />
                            <button
                                onClick={onLoginUser}
                                className="w-full py-2 bg-spotify-green hover:bg-green-600 text-black rounded-lg transition-all"
                            >
                                Iniciar sesión
                            </button>

                            <button
                                onClick={onCancel}
                                className="w-full py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all"
                            >
                                Cancelar
                            </button>
                        </div>
                        <div className="flex items-center justify-center my-4">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="px-4 text-gray-400">OR</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                    </div>
                    <div id="google-signin-button">
                        <button
                            onClick={handleGoogleCallback}
                            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all flex items-center justify-center"
                        >
                            <i className="bi bi-google mr-3"></i>
                            Google
                        </button>
                    </div>
                    <button
                        onClick={onLoginWithFacebook}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                    >
                        <i className="bi bi-facebook mr-3"></i>
                        Facebook
                        <i className="bi bi-google mr-3"></i>
                        Google
                    </button>
                    <button
                        onClick={loginWithSpotify}
                        className="w-full py-2 bg-spotify-green hover:bg-green-600 text-white rounded-lg transition-all"
                    >
                        <i className="bi bi-spotify mr-3"></i>
                        Iniciar sesión con Spotify
                    </button>
                    <button
                        onClick={onNavigateToRegister}
                        className="w-full py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-all"
                    >
                        Crear una cuenta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;