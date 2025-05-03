
import ProfileMock from '../../assets/profileMock.png'
import { PrivateNavbar } from '../components/PrivateNavbar'
import { BodyUserPage } from '../components/BodyUserPage'

const user = {
    firstName: 'Juan',
    lastName: 'Pérez',
    profilePicture: ProfileMock,
};

const ownPlaylists = [
    {
        id: 1,
        name: 'Mi Playlist 1',
        description: 'Descripción de la playlist 1',
        songs: [
            { id: 1, title: 'Canción 1', artist: 'Artista 1', duration: '3:45' },
            { id: 2, title: 'Canción 2', artist: 'Artista 2', duration: '4:20' },
        ],
        cover: 'https://picsum.photos/200',
        followers: 120, // Número de seguidores
        dateUpdate: '2025-05-01', // Fecha de última actualización
    },
    {
        id: 2,
        name: 'Mi Playlist 2',
        description: 'Descripción de la playlist 2',
        songs: [
            { id: 3, title: 'Canción 3', artist: 'Artista 3', duration: '2:50' },
            { id: 4, title: 'Canción 4', artist: 'Artista 4', duration: '3:15' },
        ],
        cover: 'https://picsum.photos/200',
        followers: 85,
        dateUpdate: '2025-04-28',
    },
];

const sharedPlaylists = [
    {
        id: 3,
        name: 'Playlist Compartida 1',
        description: 'Descripción compartida 1',
        songs: [
            { id: 5, title: 'Canción 5', artist: 'Artista 5', duration: '4:10' },
            { id: 6, title: 'Canción 6', artist: 'Artista 6', duration: '3:30' },
        ],
        cover: 'https://picsum.photos/200',
        followers: 200,
        dateUpdate: '2025-04-30',
    },
    {
        id: 4,
        name: 'Playlist Compartida 2',
        description: 'Descripción compartida 2',
        songs: [
            { id: 7, title: 'Canción 7', artist: 'Artista 7', duration: '5:00' },
            { id: 8, title: 'Canción 8', artist: 'Artista 8', duration: '3:40' },
        ],
        cover: 'https://picsum.photos/200',
        followers: 150,
        dateUpdate: '2025-04-25',
    },
];

export const UserPage = () => {

    return (
        <>
            <div className="relative z-50">
                <PrivateNavbar />
            </div>
            <div
                className="relative overflow-hidden min-h-screen bg-spotify-green "
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