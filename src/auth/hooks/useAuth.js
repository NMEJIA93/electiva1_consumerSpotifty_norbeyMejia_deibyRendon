import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

export const useAuth = () => {
    return useContext(AuthContext);
};