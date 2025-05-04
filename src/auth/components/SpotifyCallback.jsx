import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeCodeForToken } from '../../api/spotifyConsumer/auth/spotifyAuth';
import { UserContext } from '../../auth/context/UserContext';

export const SpotifyCallback = () => {
  const navigate = useNavigate();
  const { getSpotifyUser } = useContext(UserContext);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const handleSpotifyCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (!code) {
        setError('No se recibió un código de autorización.');
        navigate('/login');
        return;
      }

      try {
        const data = await exchangeCodeForToken(code);

        if (data.access_token) {
          // Almacena el token en localStorage
          localStorage.setItem('spotifyAccessToken', data.access_token);
          localStorage.setItem('spotifyRefreshToken', data.refresh_token);

          // Calcula el tiempo de expiración
          localStorage.setItem('spotifyTokenExpiration', Date.now() + data.expires_in * 1000);

          // Obtiene el perfil del usuario
          await getSpotifyUser();
          const prueba = await getSpotifyUser();
          console.log("prueba", prueba)
          // Redirige al usuario a la página principal
          navigate('/userpage');
        } else {
          setError('No se recibió un token de acceso.');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error al procesar la autenticación:', error);
        setError('Error al procesar la autenticación. Por favor, intenta nuevamente.');
        navigate('/login');
      }
    };

    handleSpotifyCallback();
  }, [getSpotifyUser, navigate]);


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