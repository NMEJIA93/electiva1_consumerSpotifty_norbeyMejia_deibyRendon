import { useReducer, useState, useEffect, useContext } from 'react';
import { authReducer } from '../reducers/authReducer';
import { UserContext } from '../context/UserContext';
import { useAuthenticate } from '../hooks/useAuthenticate';
import { authTypes } from '../types/authTypes';
import { UserProfileContext } from '../../spotifyConsumer/contexts/UserProfileContext';

const authInitialState = {
    logged: false,
    user: null,
    errorMessage: null,
}

export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(authReducer, authInitialState);
    const { login, logout, loginWithSpotify/*,getSpotifyUser*/ } = useAuthenticate(dispatch);
    const [isLoading, setIsLoading] = useState(true);

    const syncUserStateWithLocalStorage = () => {
        const storedUser = localStorage.getItem('userlogin');
        const isLogged = localStorage.getItem('logged') === 'true';

        try {
            if (storedUser && isLogged) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && typeof parsedUser === 'object') {
                    dispatch({
                        type: authTypes.login,
                        payload: parsedUser,
                    });
                }
            }
        } catch (error) {
            console.error('Error al recuperar los datos del usuario desde localStorage:', error);
            localStorage.removeItem('userlogin');
            localStorage.removeItem('logged');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        syncUserStateWithLocalStorage();
    }, []);

    if (isLoading) {
        return <p>Cargando...</p>;
    }


    return (
        <UserContext.Provider
            value={{ userState, login, logout, loginWithSpotify/*,getSpotifyUser*/ }}>
            {children}
        </UserContext.Provider>
    );
}
