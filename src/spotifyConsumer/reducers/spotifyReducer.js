import { createContext, useReducer } from 'react';
import { fetchUserProfile } from '../../api/spotifyConsumer/auth/spotifyAuth';
import {actionTypes} from '../types/actionsTypes'

export const userProfileReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};