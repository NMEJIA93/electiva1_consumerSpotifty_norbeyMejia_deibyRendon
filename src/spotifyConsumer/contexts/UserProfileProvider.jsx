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
    //const [isLoading, setIsLoading] = useState(true)

    const allowedRoutes = ['/userpage'];

    useEffect(() => {
        if (allowedRoutes.includes(location.pathname)) {
            syncUserStateWithLocalStorage();
            //setIsLoading(false);
        }
    }, [location.pathname]); 

    return (
        <UserProfileContext.Provider
            value={{ profileState, getSpotifyProfile, setProfile }}>
            {children}
        </UserProfileContext.Provider>
    );
}