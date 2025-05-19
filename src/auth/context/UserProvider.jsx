import { useReducer, useState, useEffect, useContext } from 'react';
import { authReducer } from '../reducers/authReducer';
import { UserContext } from '../context/UserContext';
import { useAuthenticate } from '../hooks/useAuthenticate';
import { authTypes } from '../types/authTypes';
import { UserProfileContext } from '../../spotifyConsumer/contexts/UserProfileContext';
import { AuthContext } from '../context/UserContext';


const authInitialState = {
    logged: false,
    user: null,
    errorMessage: null,
}

export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(authReducer, authInitialState);
    const { login, logout, loginWithSpotify, logoutWithSpotify, handleGoogleCallback } = useAuthenticate(dispatch);
    const [isLoading, setIsLoading] = useState(true);


    const initializeUserState = async () => {
        const storedUser = localStorage.getItem('userlogin');
        const isLogged = localStorage.getItem('logged') === 'true';

        if (storedUser && isLogged) {
            try {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && typeof parsedUser === 'object') {
                    dispatch({
                        type: authTypes.login,
                        payload: parsedUser,
                    });
                }
            } catch (error) {
                console.error('Error al parsear los datos del usuario desde localStorage:', error);
                clearLocalStorage();
            }
        }
    };


    const clearLocalStorage = () => {
        localStorage.removeItem('userlogin');
        localStorage.removeItem('logged');
    };

    useEffect(() => {
        const syncState = async () => {
            try {
                await initializeUserState();
            } catch (error) {
                console.error('Error al sincronizar el estado del usuario:', error);
            } finally {
                setIsLoading(false);
            }
        };

        syncState();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-spotify-black text-white">
                <div className="flex flex-col items-center">
                    {/* Spinner animado */}
                    <div className="w-12 h-12 border-4 border-spotify-green border-t-transparent rounded-full animate-spin"></div>
                    {/* Texto de carga */}
                    <p className="text-lg mt-4 text-spotify-gray">Cargando...</p>
                </div>
            </div>
        );
    }

    return (
        <UserContext.Provider
            value={{ userState, login, logout, loginWithSpotify, logoutWithSpotify,handleGoogleCallback }}
        >
            {children}
        </UserContext.Provider>
    );
};


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};