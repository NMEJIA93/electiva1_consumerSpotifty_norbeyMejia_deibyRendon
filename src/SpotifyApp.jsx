import { UserProvider } from './auth/context/UserProvider'
import { UserProfileProvider } from './spotifyConsumer/contexts/UserProfileProvider'
import { AppRouter } from './router/AppRouter'

export const SpotifyApp = () => {
    return (
        <>
            <UserProvider>
                <UserProfileProvider>

                    <AppRouter />

                </UserProfileProvider>
            </UserProvider>

        </>
    )
}