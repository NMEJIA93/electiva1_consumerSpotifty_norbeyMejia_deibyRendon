import ProfileMock from '../assets/profileMock.png';

export const userMock = {
    firstName: 'Juan',
    lastName: 'Pérez',
    profilePicture: ProfileMock,
};


export const ownPlaylists = [
    {
        id: 1,
        name: 'Mis Favoritos',
        description: 'Todas mis canciones favoritas en un solo lugar',
        songs: [
            { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', duration: '5:55' },
            { id: 2, title: 'Hotel California', artist: 'Eagles', album: 'Hotel California', duration: '6:30' },
            { id: 3, title: 'Imagine', artist: 'John Lennon', album: 'Imagine', duration: '3:04' },
            { id: 4, title: 'Sweet Child O\'Mine', artist: 'Guns N\' Roses', album: 'Appetite for Destruction', duration: '5:56' },
            { id: 5, title: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', duration: '5:01' }
        ],
        cover: 'https://picsum.photos/seed/misfavoritos/200',
        followers: 245,
        dateUpdate: '2025-05-10',
    },
    {
        id: 2,
        name: 'Rock Clásico',
        description: 'Lo mejor del rock de los 70s y 80s',
        songs: [
            { id: 6, title: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV', duration: '8:02' },
            { id: 7, title: 'Another Brick in the Wall', artist: 'Pink Floyd', album: 'The Wall', duration: '3:59' },
            { id: 8, title: 'Purple Haze', artist: 'Jimi Hendrix', album: 'Are You Experienced', duration: '2:50' },
            { id: 9, title: 'Born to Run', artist: 'Bruce Springsteen', album: 'Born to Run', duration: '4:30' }
        ],
        cover: 'https://picsum.photos/seed/rockclasico/200',
        followers: 189,
        dateUpdate: '2025-05-05',
    },
    {
        id: 3,
        name: 'Para Programar',
        description: 'Música para concentrarse mientras se programa',
        songs: [
            { id: 10, title: 'Clair de Lune', artist: 'Claude Debussy', album: 'Suite Bergamasque', duration: '5:03' },
            { id: 11, title: 'River Flows In You', artist: 'Yiruma', album: 'First Love', duration: '3:10' },
            { id: 12, title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', album: 'Una Mattina', duration: '5:57' },
            { id: 13, title: 'Comptine d\'un autre été', artist: 'Yann Tiersen', album: 'Amélie', duration: '2:20' }
        ],
        cover: 'https://picsum.photos/seed/programar/200',
        followers: 132,
        dateUpdate: '2025-05-08',
    },
    {
        id: 8,
        name: 'Electrónica Vibes',
        description: 'Lo mejor de la música electrónica para cualquier momento',
        songs: [
            { id: 33, title: 'Strobe', artist: 'deadmau5', album: 'For Lack of a Better Name', duration: '10:37' },
            { id: 34, title: 'Opus', artist: 'Eric Prydz', album: 'Opus', duration: '9:03' },
            { id: 35, title: 'Sun & Moon', artist: 'Above & Beyond ft. Richard Bedford', album: 'Group Therapy', duration: '5:25' },
            { id: 36, title: 'Language', artist: 'Porter Robinson', album: 'Language', duration: '6:08' },
            { id: 37, title: 'Shelter', artist: 'Porter Robinson & Madeon', album: 'Shelter', duration: '3:38' }
        ],
        cover: 'https://picsum.photos/seed/electronicavibes/200',
        followers: 98,
        dateUpdate: '2025-05-15',
    }
];

export const sharedPlaylists = [
    {
        id: 4,
        name: 'Éxitos 2025',
        description: 'Las canciones más populares del momento',
        songs: [
            { id: 14, title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', duration: '3:20' },
            { id: 15, title: 'Kill Bill', artist: 'SZA', album: 'SOS', duration: '2:33' },
            { id: 16, title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', duration: '3:20' },
            { id: 17, title: 'Unholy', artist: 'Sam Smith & Kim Petras', album: 'Gloria', duration: '2:36' },
            { id: 18, title: 'As It Was', artist: 'Harry Styles', album: 'Harry\'s House', duration: '2:47' }
        ],
        cover: 'https://picsum.photos/seed/exitos2025/200',
        followers: 532,
        dateUpdate: '2025-05-12',
    },
    {
        id: 5,
        name: 'Indie Essentials',
        description: 'Lo mejor de la escena indie actual',
        songs: [
            { id: 19, title: 'Space Song', artist: 'Beach House', album: 'Depression Cherry', duration: '5:20' },
            { id: 20, title: 'Ribs', artist: 'Lorde', album: 'Pure Heroine', duration: '4:18' },
            { id: 21, title: 'Breezeblocks', artist: 'alt-J', album: 'An Awesome Wave', duration: '3:47' },
            { id: 22, title: 'Do I Wanna Know?', artist: 'Arctic Monkeys', album: 'AM', duration: '4:32' },
            { id: 23, title: 'Pumped Up Kicks', artist: 'Foster the People', album: 'Torches', duration: '3:59' }
        ],
        cover: 'https://picsum.photos/seed/indieessentials/200',
        followers: 321,
        dateUpdate: '2025-05-09',
    },
    {
        id: 6,
        name: 'Jazz Relax',
        description: 'Jazz suave para relajarse',
        songs: [
            { id: 24, title: 'Take Five', artist: 'Dave Brubeck Quartet', album: 'Time Out', duration: '5:24' },
            { id: 25, title: 'So What', artist: 'Miles Davis', album: 'Kind of Blue', duration: '9:22' },
            { id: 26, title: 'My Favorite Things', artist: 'John Coltrane', album: 'My Favorite Things', duration: '13:43' },
            { id: 27, title: 'Autumn Leaves', artist: 'Cannonball Adderley', album: 'Somethin\' Else', duration: '10:59' }
        ],
        cover: 'https://picsum.photos/seed/jazzrelax/200',
        followers: 178,
        dateUpdate: '2025-05-07',
    },
    {
        id: 7,
        name: 'Hip Hop Classics',
        description: 'Los clásicos del hip hop que no pueden faltar',
        songs: [
            { id: 28, title: 'Juicy', artist: 'The Notorious B.I.G.', album: 'Ready to Die', duration: '4:16' },
            { id: 29, title: 'Nuthin\' But a "G" Thang', artist: 'Dr. Dre ft. Snoop Dogg', album: 'The Chronic', duration: '3:57' },
            { id: 30, title: 'C.R.E.A.M.', artist: 'Wu-Tang Clan', album: 'Enter the Wu-Tang (36 Chambers)', duration: '4:12' },
            { id: 31, title: 'Dear Mama', artist: '2Pac', album: 'Me Against the World', duration: '4:40' },
            { id: 32, title: 'The Message', artist: 'Grandmaster Flash & The Furious Five', album: 'The Message', duration: '7:11' }
        ],
        cover: 'https://picsum.photos/seed/hiphopclassics/200',
        followers: 267,
        dateUpdate: '2025-05-03',
    }
];

export const dataPorfil = {
    id: 1,
    name: "James",
    lastName: "Hincapie Mejia",
    user: "jamesor2017",
    email: "jamesor2017@gmail.com",
    date: "2003-04-23",
    stats: {
      numberPlayList: 5,
      FavoriteArtist: ["artist1", "artist2", "artist3", "artist4"],
      favoriteGenre: ["rock", "pop", "jazz", "reggaeton"],
      recentPlayback: [
        {
          title: "Song 1",
          artist: "Artist A",
          album: "Album A",
          duration: "3:45",
        },
        {
          title: "Song 2",
          artist: "Artist B",
          album: "Album B",
          duration: "4:10",
        },
        {
          title: "Song 3",
          artist: "Artist C",
          album: "Album C",
          duration: "2:30",
        },
        {
          title: "Song 4",
          artist: "Artist D",
          album: "Album D",
          duration: "5:00",
        },
      ],
    },
    spotifyConect: true
  };
