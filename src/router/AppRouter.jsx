import { Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { HomePage } from '../spotifyConsumer/pages/HomePage'
import { LoginPage } from '../auth/pages/LoginPage'
import { UserPage } from '../spotifyConsumer/pages/UserPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { useAuth } from '../auth/hooks/useAuth'
import { SpotifyCallback } from '../auth/components/SpotifyCallback'
import { UserContext } from '../auth/context/UserContext'

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    console.log(user, 'user en el router');
    
    return user ? children : <Navigate to="/login" />;
};

export const AppRouter = () => {

    const { userState: { logged } } = useContext(UserContext)

    if (!logged) {
        return (
            <>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/callback" element={<SpotifyCallback />} />
                    <Route path="/*" element={<Navigate to="/login" />} />
                </Routes>
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/userpage" element={<UserPage />} />
                <Route path = "/register" element={<RegisterPage />} />
                <Route path="/userpagelogin" element={<PrivateRoute><UserPage /></PrivateRoute>} />
                <Route path="/*" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/*" element={<Navigate to="/userpage" />} />
            </Routes>
        </>
    );
}