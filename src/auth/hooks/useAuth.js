import { useContext } from 'react';
import { AuthContext } from '../hooks/authContext';

export const useAuth = () => {
    return useContext(AuthContext);
};