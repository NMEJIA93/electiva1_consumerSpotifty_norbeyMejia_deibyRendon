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
