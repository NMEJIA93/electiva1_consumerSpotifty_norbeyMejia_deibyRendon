import { useReducer, useState } from 'react';
import {userProfileReducer} from '../reducers/spotifyReducer'
import {UserProfileContext} from  '../contexts/UserProfileContext'

// Estado inicial del perfil del usuario
const initialProfileState = {
    profile: null,
    playlists: [],
    error: null,
  };