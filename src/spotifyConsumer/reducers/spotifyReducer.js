import { createContext, useReducer } from 'react';
import { fetchUserProfile } from '../../api/spotifyConsumer/auth/spotifyAuth';

export const userProfileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};


/*
// Crear el contexto
export const UserProfileContext = createContext();

// Proveedor del contexto
export const UserProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userProfileReducer, initialState);

  // Función para obtener y almacenar el perfil del usuario
  const fetchAndSetUserProfile = async (accessToken) => {
    try {
      const userProfile = await fetchUserProfile(accessToken);
      dispatch({ type: 'SET_PROFILE', payload: userProfile });
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Error al obtener el perfil del usuario.' });
    }
  };

  // Función para establecer las playlists
  const setPlaylists = (playlists) => {
    dispatch({ type: 'SET_PLAYLISTS', payload: playlists });
  };

  return (
    <UserProfileContext.Provider
      value={{
        state,
        fetchAndSetUserProfile,
        setPlaylists,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
*/