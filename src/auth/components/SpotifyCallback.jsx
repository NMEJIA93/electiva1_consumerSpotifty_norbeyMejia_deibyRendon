import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeCodeForToken } from '../../api/spotifyConsumer/auth/spotifyAuth';

export const SpotifyCallback = () => {
  const navigate = useNavigate();
  // Estado para almacenar el mensaje de error
  const [error, setError] = useState(null); 

  useEffect(() => {
    const handleSpotifyCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (!code) {
        setError('No se recibió un código de autorización.');
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

          console.log('Token recibido:', data);
          // Redirige al usuario a la página principal
          navigate('/userpage'); 
        } else {
          setError('No se recibió un token de acceso.');
        }
      } catch (error) {
        console.error('Error al intercambiar el código por el token:', error.response?.data || error.message);
        setError(error.response?.data?.error_description || 'Ocurrió un error inesperado.');
      }
    };

    handleSpotifyCallback();
  }, [navigate]);

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