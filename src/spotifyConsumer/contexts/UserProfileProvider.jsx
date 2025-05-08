import { useReducer, useState, useEffect } from 'react';
import { userProfileReducer } from '../reducers/spotifyReducer'
import { UserProfileContext } from '../contexts/UserProfileContext'
import { useProfile } from '../hooks/useProfile'


const initialProfileState = {
    profile: null,
    playlists: [],
    error: null,
};

export const UserProfileProvider = ({ children }) => {
    const [profileState, dispatch] = useReducer(userProfileReducer, initialProfileState);
    const { getSpotifyProfile, setProfile, syncUserStateWithLocalStorage } = useProfile(dispatch);
    const [isLoading, setIsLoading] = useState(true)


    // Define las rutas en las que deseas ejecutar el efecto
    const allowedRoutes = ['/userpage'];

    useEffect(() => {
        // Verifica si la ruta actual está en las rutas permitidas
        if (allowedRoutes.includes(location.pathname)) {
            syncUserStateWithLocalStorage();
            setIsLoading(false);
        }
    }, [location.pathname]); // Escucha cambios en la ruta actual




    return (
        <UserProfileContext.Provider
            value={{ profileState, getSpotifyProfile, setProfile }}>
            {children}
        </UserProfileContext.Provider>
    );
}