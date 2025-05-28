import { useReducer, useState, useEffect, useContext } from 'react';
import { userProfileReducer } from '../reducers/spotifyReducer'
import { UserProfileContext } from '../contexts/UserProfileContext'
import { useProfile } from '../hooks/useProfile'
import {UserContext} from '../../auth/context/UserContext'


const initialProfileState = {
    profile: null,
    error: null,
};

const init = () =>{
    return initialProfileState;
}

export const UserProfileProvider = ({ children }) => {
    const [profileState, dispatch] = useReducer(userProfileReducer, initialProfileState,init);
    
    const {userState: user}  = useContext(UserContext)
    const { getSpotifyProfile, setProfile, syncUserStateWithLocalStorage, saveProfileFirebase } = useProfile(dispatch);
    //const [isLoading, setIsLoading] = useState(true)

    const allowedRoutes = ['/userpage','/home'];

    useEffect(() => {
        if (allowedRoutes.includes(location.pathname)) {
             syncUserStateWithLocalStorage();
        }
    }, [location.pathname]); 

    return (
        <UserProfileContext.Provider
            value={{ profileState, getSpotifyProfile, setProfile,saveProfileFirebase }}>
            {children}
        </UserProfileContext.Provider>
    );
}