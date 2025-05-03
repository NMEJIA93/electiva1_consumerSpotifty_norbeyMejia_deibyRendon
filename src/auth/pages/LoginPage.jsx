import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import bgBackground from '../../assets/bgBlackColor.png'

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onCancel = () => {
        navigate('/', { replace: true });
    };

    const onLoginUser = () => {
        console.log('Iniciar sesión como Usuario', { email, password });
        navigate('/userpage', { replace: true });
    };

    const onLoginWithGoogle = () => {
        console.log('Iniciar sesión con Google');
    };

    const onLoginWithSpotify = () => {
        console.log('Iniciar sesión con Spotify');
    };

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
                    <button
                        onClick={onLoginWithGoogle}
                        className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                    >
                        <i class="bi bi-google mr-3"></i>
                        Google
                    </button>
                    {/* Botón para iniciar sesión con Spotify */}
                    <button
                        onClick={onLoginWithSpotify}
                        className="w-full py-2 bg-spotify-green hover:bg-green-600 text-white rounded-lg transition-all"
                    >
                        <i class="bi bi-spotify mr-3"></i>
                        Iniciar sesión con Spotify
                    </button>
                </div>
            </div>
        </div>
    );
};