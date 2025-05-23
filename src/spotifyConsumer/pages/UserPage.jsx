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
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-spotify-black text-white">
                <div className="flex flex-col items-center">
                    {/* Icono de error */}
                    <div className="text-red-500 text-6xl mb-4">
                        <i className="bi bi-exclamation-triangle-fill"></i>
                    </div>
                    {/* Mensaje de error */}
                    <p className="text-lg text-red-500">{error}</p>
                    {/* Botón para volver */}
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-4 py-2 bg-spotify-green text-black rounded-lg hover:bg-green-600 transition-all"
                    >
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-spotify-black text-white">
                <div className="flex flex-col items-center">
                    {/* Spinner animado */}
                    <div className="w-12 h-12 border-4 border-spotify-green border-t-transparent rounded-full animate-spin"></div>
                    {/* Texto de carga */}
                    <p className="text-lg mt-4 text-spotify-gray">Cargando datos del usuario...</p>
                </div>
            </div>
        );
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