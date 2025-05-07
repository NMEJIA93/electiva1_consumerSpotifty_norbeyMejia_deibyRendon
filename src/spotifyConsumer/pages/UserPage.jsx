import { useEffect, useState, useContext } from 'react';

import { PrivateNavbar } from '../components/PrivateNavbar'
import { BodyUserPage } from '../components/BodyUserPage'
import { userMock, ownPlaylists, sharedPlaylists } from '../../mocks/mocks'

import { UserProfileContext } from '../contexts/UserProfileContext'

export const UserPage = () => {
    //const { userState } = useContext(UserContext);
    //console.log('Estado global del usuario:', userState);
    //const { user, errorMessage: error } = userState;


    const { profileState } = useContext(UserProfileContext);
    const { profile, errorMessage: error } = profileState;
    console.log('Estado global del perfil:', profileState);


    
    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!profile) {
        return <p className="text-white">Cargando datos del usuario...</p>;
    }

    const transformedUser = {
        firstName: profile.firstName || 'Usuario',
        profilePicture: profile.profilePicture || '',
        email: profile.email || 'Correo no disponible',
        followers: profile.followers || 0,
        subscription: profile.subscription || 'free',
        profileLink: profile.profileLink || 'https://www.spotify.com',
        artistsFollowers: profile.artistsFollowers || [],
    };

    return (
        <>
            <div className="relative z-50">
                <PrivateNavbar />
            </div>
            <div
                className="relative overflow-hidden min-h-screen bg-spotify-green "
            >
                <BodyUserPage
                    user={transformedUser}
                    ownPlaylists={ownPlaylists}
                    sharedPlaylists={sharedPlaylists}
                />
            </div>
        </>
    );
};