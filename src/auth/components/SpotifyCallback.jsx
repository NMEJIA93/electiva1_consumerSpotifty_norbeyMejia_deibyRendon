import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeCodeForToken } from '../../api/spotifyConsumer/auth/spotifyAuth';
import { UserProfileContext } from '../../spotifyConsumer/contexts/UserProfileContext';
import { UserContext } from '../../auth/context/UserContext';

export const SpotifyCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { getSpotifyProfile } = useContext(UserProfileContext);
  const { login } = useContext(UserContext);

  
  const processApiSpotifyCallback = async () => {
    try {
      const authorizationCode = extractAuthorizationCode();
      if (!authorizationCode) {
        throw new Error('No se recibió un código de autorización.');
      }

      const tokenData = await fetchTokenData(authorizationCode);
      await fetchAndSaveUserProfile(tokenData);

      navigate('/userpage'); 
    } catch (error) {
      console.error('Error en el flujo de autenticación:', error);
      setError(error.message || 'Error al procesar la autenticación.');
      navigate('/login'); 
    }
  };

  const extractAuthorizationCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  };

  const fetchTokenData = async (code) => {
    const token = await exchangeCodeForToken(code);
    if (token.access_token) {
      localStorage.setItem('spotifyAccessToken', token.access_token);
      localStorage.setItem('spotifyRefreshToken', token.refresh_token);
      localStorage.setItem('spotifyTokenExpiration', Date.now() + token.expires_in * 1000);
    }
    return token;
  };

  const fetchAndSaveUserProfile = async (token) => {
    const userProfile = await getSpotifyProfile();
    saveUserProfileToLocalStorage(userProfile);
    login(userProfile);
  };
  
  const saveUserProfileToLocalStorage = (userProfile) => {
    localStorage.setItem('userlogin', JSON.stringify(userProfile));
    localStorage.setItem('logged', true);
  };

  useEffect(() => {
    processApiSpotifyCallback();
  }, []); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-spotify-black text-white">
      {error ? (
        <ErrorDisplay error={error} navigate={navigate} />
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-spotify-green border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg mt-4">Cargando...</p>
        </div>
      )}
    </div>
  );
};


const ErrorDisplay = ({ error, navigate }) => (
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
);