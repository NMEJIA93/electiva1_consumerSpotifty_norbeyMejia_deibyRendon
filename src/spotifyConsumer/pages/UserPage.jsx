import { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../auth/context/UserContext';
import { PrivateNavbar } from '../components/PrivateNavbar'
import { BodyUserPage } from '../components/BodyUserPage'
import {userMock, ownPlaylists, sharedPlaylists} from '../../mocks/mocks'

//import ProfileMock from '../../assets/profileMock.png'
//import {UserProfileContext} from '../contexts/UserProfileContext'
//import { fetchUserProfile } from '../../api/spotifyConsumer/auth/spotifyAuth';


export const UserPage = () => {
    const { userState } = useContext(UserContext);6
    console.log('Estado global del usuario:', userState);
    const { user, errorMessage: error } = userState;
/*
    const { profileState } = useContext(UserProfileContext);
    console.log('Estado global del perfil de usuario:', profileState);

    const {} = useContext()
*/
    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    // Estado de carga
    if (!user) {
        return <p className="text-white">Cargando datos del usuario...</p>;
    }

    /*
        useEffect(() => {
            const getUserProfile = async () => {
                const accessToken = localStorage.getItem('spotifyAccessToken');
                if (!accessToken) {
                    setError('No se encontró un token de acceso. Por favor, inicia sesión nuevamente.');
                    return;
                }
    
                try {
                    const userProfile = await fetchUserProfile(accessToken);
                    setUser({
                        firstName: userProfile.display_name || 'Usuario',
                        profilePicture: userProfile.images?.[0]?.url || '', 
                        email: userProfile.email || 'Correo no disponible', 
                        followers: userProfile.followers?.total || 0, 
                        subscription: userProfile.product || 'free', 
                    },
                    console.log("email antes de asignarlo "+userProfile.email)
                );
                    
                } catch (error) {
                    setError('Error al obtener los datos del usuario. Por favor, intenta nuevamente.');
                }
                
            };
    
            getUserProfile();
        }, []);
    
        if (error) {
            return <p className="text-red-500">{error}</p>;
        }
    
        if (!user) {
            return <p className="text-white">Cargando datos del usuario...</p>;
        }
            */

        const transformedUser = {
            firstName: user.firstName || 'Usuario',
            profilePicture: user.profilePicture || '',
            email: user.email || 'Correo no disponible',
            followers: user.followers || 0,
            subscription: user.subscription || 'free',
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