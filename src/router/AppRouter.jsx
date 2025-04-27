import { Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from '../spotifyConsumer/pages/HomePage'
import {LoginPage} from '../auth/pages/LoginPage'

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path = "/" element={<HomePage />} />
                <Route path = "/login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}