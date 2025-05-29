export const useManagementLocalStorage = () => {
    const clearLocalStorage = () => {
        localStorage.removeItem('spotifyAccessToken');
        localStorage.removeItem('spotifyCodeVerifier');
        localStorage.removeItem('spotifyRefreshToken');
        localStorage.removeItem('spotifyTokenExpiration');
        localStorage.removeItem('userlogin');
        localStorage.removeItem('logged');
        localStorage.removeItem('theme');
    }

    const setLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    }

    return { clearLocalStorage,setLocalStorage };
}