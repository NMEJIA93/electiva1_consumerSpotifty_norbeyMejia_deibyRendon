import { useReducer, useState } from 'react';
import { authReducer } from '../reducers/authReducer';
import { UserContext } from '../context/UserContext';
import { useAuthenticate } from '../hooks/useAuthenticate';

const authInitialState = {
    logged: false,
    user: null,
    errorMessage: null,
}

export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(authReducer, authInitialState);
    const { login, logout, loginWithSpotify/*,getSpotifyUser*/ } = useAuthenticate(dispatch);

    return (
        <UserContext.Provider
            value={{userState,login,logout,loginWithSpotify/*,getSpotifyUser*/}}>
            {children}
        </UserContext.Provider>
    );
}
