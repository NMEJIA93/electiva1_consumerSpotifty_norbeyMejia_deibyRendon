import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { FirebaseDb } from '../../firebase/firebaseConfig';

const usePlaylist = () => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const querySnapshot = await getDocs(collection(FirebaseDb, 'playlist'));
                const playlistsArray = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log('++++++++++Playlists fetched from Firebase:', playlistsArray);
                setPlaylists(playlistsArray);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylists();
    }, []);
    
    localStorage.setItem('playlistsFirebase', JSON.stringify(playlists));
    console.log('+++++++++++++++++++++++++++sPlaylists:', playlists);
    return { playlists, loading };
};

export default usePlaylist;