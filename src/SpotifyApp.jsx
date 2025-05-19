import { UserProvider } from "./auth/context/UserProvider";
import { UserProfileProvider } from "./spotifyConsumer/contexts/UserProfileProvider";
import { AuthProvider } from "./auth/context/UserProvider";
import { AppRouter } from "./router/AppRouter";

export const SpotifyApp = () => {
  return (
    <>
      <UserProvider>
        <UserProfileProvider>
          <AppRouter />
        </UserProfileProvider>
      </UserProvider>
    </>
  );
};
