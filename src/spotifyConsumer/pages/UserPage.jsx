import Bacground from '../../assets/backgroundGreen.png'

import { PrivateNavbar } from '../components/PrivateNavbar'
import { BodyUserPage } from '../components/BodyUserPage'

const user = {
    firstName: 'Juan',
    lastName: 'Pérez',
    profilePicture: 'https://via.placeholder.com/150',
};

const ownPlaylists = [
    { id: 1, name: 'Mi Playlist 1', description: 'Descripción de la playlist 1' },
    { id: 2, name: 'Mi Playlist 2', description: 'Descripción de la playlist 2' },
];

const sharedPlaylists = [
    { id: 3, name: 'Playlist Compartida 1', description: 'Descripción compartida 1' },
    { id: 4, name: 'Playlist Compartida 2', description: 'Descripción compartida 2' },
];

export const UserPage = () => {
    const bgImage = {
        backgroundImage: `url(${Bacground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
            {/* Navbar fijo */}
            <div className="relative z-50">
                <PrivateNavbar />
            </div>

            {/* Contenido principal */}
            <div
                style={bgImage}
                className="relative overflow-hidden min-h-screen bg-green-700 "
            >
                <BodyUserPage
                    user={user}
                    ownPlaylists={ownPlaylists}
                    sharedPlaylists={sharedPlaylists}
                />
            </div>
        </>
    );
};