import { createContext, useReducer } from 'react';
import { fetchUserProfile } from '../../api/spotifyConsumer/auth/spotifyAuth';
import { actionTypes } from '../types/actionsTypes'

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SAVE_PROFILE:
      return {
        ...state,
        //profile: state.profile.push(action.payload) en el video estaba asi por ser un arreglo 
        profile: action.payload
      };
    case actionTypes.UPDATE_PROFILE:
      if (
        state.profile &&
        action.payload &&
        state.profile.id === action.payload.id
      ) {
        return {
          ...state,
          profile: {
            ...state.profile,
            ...action.payload
          }
        };
      }
      return state;
    case actionTypes.REMOVE_PROFILE:
      return {};
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