import { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../auth/context/UserContext';
import { PrivateNavbar } from '../components/PrivateNavbar'
import { BodyUserPage } from '../components/BodyUserPage'
import { userMock, ownPlaylists, sharedPlaylists } from '../../mocks/mocks'

import { UserProfileContext } from '../contexts/UserProfileContext'

export const UserPage = () => {
    const { userState } = useContext(UserContext);
    //console.log('Estado global del usuario:', userState);
    const { user, errorMessage: error } = userState;


    const { profileState } = useContext(UserProfileContext);
    console.log('Estado global del perfil de usuario +++++++++++++++++++++++:', profileState.profile);
    console.log('****************************************', profileState.profile);
    console.log('****************************************', profileState.profilePicture);
    console.log('****************************************', profileState.firstName);

    const t = {
        nombre : profileState.firstName || 'Usuario',
    }
    console.log('Nombre del usuario:&&&&&&&&&&&&&&&&&&&&&&&&&', t.nombre);

    
    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    // Estado de carga
    if (!user) {
        return <p className="text-white">Cargando datos del usuario...</p>;
    }

    const transformedUser = {
        firstName: user.firstName || 'Usuario',
        profilePicture: user.profilePicture || '',
        email: user.email || 'Correo no disponible',
        followers: user.followers || 0,
        subscription: user.subscription || 'free',
        profileLink: profileState.profileLink || 'https://www.spotify.com',
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