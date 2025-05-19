<<<<<<< HEAD
import { UserProvider } from "./auth/context/UserProvider";
import { UserProfileProvider } from "./spotifyConsumer/contexts/UserProfileProvider";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "./context/ThemeContext.jsx";

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
  );
};
=======
import { UserProvider } from './auth/context/UserProvider'
import { UserProfileProvider } from './spotifyConsumer/contexts/UserProfileProvider'
import { AuthProvider } from './auth/context/UserProvider'
import { AppRouter } from './router/AppRouter'

export const SpotifyApp = () => {
    return (
        <>
            <UserProvider>
                <AuthProvider>
                    <UserProfileProvider>

                        <AppRouter />

                    </UserProfileProvider>
                </AuthProvider>
            </UserProvider>

        </>
    )
}
>>>>>>> e9add46880e7de89ef3b1312ed11acf303a2192e
