import { UserProvider } from './auth/context/UserProvider'
import { UserProfileProvider } from './spotifyConsumer/contexts/UserProfileProvider'
import { AuthProvider } from './auth/context/UserProvider'
import { AppRouter } from './router/AppRouter'
import { ThemeProvider } from './context/ThemeContext'

export const SpotifyApp = () => {
    return (
        <>
        <ThemeProvider>
            <UserProvider>
                    <UserProfileProvider>

                        <AppRouter />

                    </UserProfileProvider>
            </UserProvider>
        </ThemeProvider>

        </>
    )
}