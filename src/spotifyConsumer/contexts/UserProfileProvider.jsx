import { useReducer, useState } from 'react';
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
    const {getProfile, getSpotifyUser} = useProfile(dispatch);

    return (
        <UserProfileContext.Provider
            value={{ profileState, getProfile, getSpotifyUser}}>
            {children}
        </UserProfileContext.Provider>
    );
}