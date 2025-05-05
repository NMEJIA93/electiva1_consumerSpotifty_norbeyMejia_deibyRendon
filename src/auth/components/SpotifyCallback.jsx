import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeCodeForToken } from '../../api/spotifyConsumer/auth/spotifyAuth';
import { UserProfileContext } from '../../spotifyConsumer/contexts/UserProfileContext';
import { UserContext } from '../../auth/context/UserContext'


export const SpotifyCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { getSpotifyProfile,loginWithSpotify } = useContext(UserProfileContext);
  //const { getSpotifyUser } = useContext(UserContext);
  const { login } = useContext(UserContext);

  useEffect(() => {
    const spotifyCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      console.log('Código de autorización recibido:', code);

      if (!code) {
        setError('No se recibió un código de autorización.');
        navigate('/login');
        return;
      }

      try {
        // Intercambia el código de autorización por un token de acceso
        const token = await exchangeCodeForToken(code);
        if (token.access_token) {
          localStorage.setItem('spotifyAccessToken', token.access_token);
          localStorage.setItem('spotifyRefreshToken', token.refresh_token);
          localStorage.setItem('spotifyTokenExpiration', Date.now() + token.expires_in * 1000);
        }

        console.log('Token recibido:', token);

        // Obtiene el perfil del usuario
        //await getSpotifyUser();

        // Prueba flujo traer Perfil con flujo diferente
        await getSpotifyProfile();
        const userProfile = await getSpotifyProfile();
        console.log('Perfil de usuario Prueba:', userProfile);

        // Actualiza el estado global del usuario
        login({
          email: userProfile.email,
          firstName: userProfile.display_name,
          profilePicture: userProfile.images?.[0]?.url || '',
          followers: userProfile.followers?.total || 0,
          subscription: userProfile.product || 'free',
        });
        // Redirige al usuario a la página principal
        navigate('/userpage');
      } catch (error) {
        console.error('Error en el flujo de autenticación:', error);
        setError('Error al procesar la autenticación. Por favor, intenta nuevamente.');
        navigate('/login');
      }
    };

    spotifyCallback();
  }, [getSpotifyProfile, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-spotify-black text-white">
      {error ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-lg">{error}</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-6 px-4 py-2 bg-spotify-green text-black rounded-lg hover:bg-green-600 transition-all"
          >
            Volver al inicio de sesión
          </button>
        </div>
      ) : (
        <p className="text-lg">Cargando...</p>
      )}
    </div>
  );
};