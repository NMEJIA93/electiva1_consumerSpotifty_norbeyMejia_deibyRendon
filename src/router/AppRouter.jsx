import { Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { HomePage } from '../spotifyConsumer/pages/HomePage'
import { LoginPage } from '../auth/pages/LoginPage'
import { UserPage } from '../spotifyConsumer/pages/UserPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { SpotifyCallback } from '../auth/components/SpotifyCallback'
import { UserContext } from '../auth/context/UserContext'



export const AppRouter = () => {

    const { userState: { logged } } = useContext(UserContext)

    if (!logged) {
        return (
            <>
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/callback" element={<SpotifyCallback />} />
                    <Route path="/*" element={<Navigate to="/" />} />


                </Routes>
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/userpage" element={<UserPage />} />
                <Route path="/*" element={<Navigate to="/userpage" />} />
            </Routes>
        </>
    );
}