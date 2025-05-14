import { Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from '../spotifyConsumer/pages/HomePage'
import { LoginPage } from '../auth/pages/LoginPage'
import { UserPage } from '../spotifyConsumer/pages/UserPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { useAuth } from '../auth/hooks/useAuth'

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    console.log(user, 'user en el router');
    
    return user ? children : <Navigate to="/login" />;
};

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/userpage" element={<UserPage />} />
                <Route path = "/register" element={<RegisterPage />} />
                <Route path="/userpagelogin" element={<PrivateRoute><UserPage /></PrivateRoute>} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}