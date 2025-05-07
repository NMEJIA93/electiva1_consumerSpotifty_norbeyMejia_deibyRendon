import { useReducer, useState, useEffect } from 'react';
import { userProfileReducer } from '../reducers/spotifyReducer'
import { UserProfileContext } from '../contexts/UserProfileContext'
import { useProfile } from '../hooks/useProfile'

// Estado inicial del perfil del usuario
const initialProfileState = {
    profile: null,
    playlists: [],
    error: null,
};

export const UserProfileProvider = ({ children }) => {
    const [profileState, dispatch] = useReducer(userProfileReducer, initialProfileState);
    const { getSpotifyProfile,setProfile,syncUserStateWithLocalStorage} = useProfile(dispatch);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        syncUserStateWithLocalStorage();
        setIsLoading(false); 
      }, []);
    
      if (isLoading) {
        return <p>Cargando perfil...</p>; 
      }


    return (
        <UserProfileContext.Provider
            value={{ profileState, getSpotifyProfile,setProfile}}>
            {children}
        </UserProfileContext.Provider>
    );
}