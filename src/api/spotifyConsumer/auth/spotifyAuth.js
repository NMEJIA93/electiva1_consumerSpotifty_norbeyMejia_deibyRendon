import axios from 'axios';
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_AUTH_ENDPOINT,
  SPOTIFY_SCOPES,
  SPOTIFY_TOKEN_ENDPOINT,
} from '../config/spotifyConfig';
import { generateCodeVerifier, generateCodeChallenge } from './pkceUtils';

export const redirectToSpotifyLogin = async () => {
  const codeVerifier = generateCodeVerifier();

  localStorage.setItem('spotifyCodeVerifier', codeVerifier);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const authUrl = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    SPOTIFY_REDIRECT_URI
  )}&code_challenge=${codeChallenge}&code_challenge_method=S256&scope=${encodeURIComponent(
    SPOTIFY_SCOPES
  )}`;

  window.location.href = authUrl;
};

export const exchangeCodeForToken = async (code) => {
  try {

    const codeVerifier = localStorage.getItem('spotifyCodeVerifier');
    if (!codeVerifier) {
      throw new Error('No se encontró el code_verifier en localStorage.');
    }

    const response = await axios.post(
      SPOTIFY_TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        client_id: SPOTIFY_CLIENT_ID,
        code_verifier: codeVerifier,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al intercambiar el código por el token:', error.response?.data || error.message);
    throw error;
  }
};


export const fetchUserProfile = async (accessToken) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error.response?.data || error.message);
    throw error;
  }
};

export const getSpotifyArtistsFollowers = async (accessToken) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me/following?type=artist', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;


  } catch (error) {
    console.error('Error al obtener los seguidores de los artistas:', error.response?.data || error.message);
    throw error;
  }
}