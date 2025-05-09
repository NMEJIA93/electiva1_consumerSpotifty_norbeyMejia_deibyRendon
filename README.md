# Consumer Spotify App 🎵  
React application that allows you to explore your Spotify profile, playlists, and more. Built with Vite, TailwindCSS, and OAuth2 (PKCE) authentication with Spotify.

---

## 👥 Team Members
- **Deiby Rendon**
- **Norbey Mejia**

---

## 🛠️ Technologies Used

- **React** ⚛️: JavaScript library for building user interfaces.
- **Vite** ⚡: Fast and lightweight development tool.
- **TailwindCSS** 🎨: Utility-first CSS framework for modern and responsive design.
- **JavaScript** 📜: Programming language used for the application.
- **Axios** 🌐: HTTP client for interacting with the Spotify API.
- **React Router** 🛣️: Routing management for the application.
- **Bootstrap Icons** 🎯: Icons to enhance the interface.

---

## 🚀 Key Features

- **Login**:
  - Login with email and password.
  - Authentication via Google and Spotify (OAuth2 with PKCE).
- **Spotify Integration**:
  - Retrieve user profile information from the Spotify API.
  - Display personal and shared playlists.
  - View artists followed by the user.
- **Modern Design**:
  - Uses TailwindCSS with a custom color palette inspired by Spotify.
  - Responsive design for mobile and desktop devices.
- **Validations**:
  - Real-time validation in registration forms.
- **Protected Routes**:
  - Redirect unauthenticated users to the login page.
- **Global State Management**:
  - Context API and Reducers to manage authentication and user profile state.

---

## 🎨 UX/UI Design of Pages

### 🏠 HomePage
- **Design**: Landing page with dynamic background and Spotify-inspired color palette.
- **Main Components**: `PublicNavbar`, `Hero`.
- **User Experience**: Clear navigation and adaptable design for all devices.

### 🔑 LoginPage
- **Design**: Dark background with a centered form.
- **Main Components**: Login fields, Google and Spotify buttons, cancel button.
- **UX**: Real-time validation and smooth transitions.

### 📝 RegisterPage
- **Design**: Green background with an organized form.
- **Main Components**: Fields for name, email, password, and action buttons.
- **UX**: Validations and visible error messages.

### 👤 UserPage
- **Design**: Personalized page with a green background.
- **Components**: `PrivateNavbar`, `BodyUserPage`.
- **UX**: Clear display of user information, personal and shared playlists, and followed artists.

### 🔄 SpotifyCallback
- **Design**: Intermediate page after Spotify authentication.
- **Components**: Loading and error messages.
- **UX**: Clear feedback during the authentication process.

---

## 📦 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NMEJIA93/electiva1_consumerSpotifty_norbeyMejia_deibyRendon.git
   cd electiva1_consumerSpotifty_norbeyMejia_deibyRendon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Configure environment variables:
   - Ensure you properly configure the values in `src/api/spotifyConsumer/config/spotifyConfig.js`:
     ```javascript
     export const SPOTIFY_CLIENT_ID = 'YOUR_CLIENT_ID';
     export const SPOTIFY_REDIRECT_URI = 'http://127.0.0.1:5173/callback';
     export const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
     export const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
     export const SPOTIFY_SCOPES = [
         'user-read-private',
         'user-read-email',
         'playlist-read-private',
         'playlist-read-collaborative',
         'user-follow-read'
     ].join(' ');
     ```

---

## 📁 Project Structure

```
├── public/
│   └── vite.svg
│
├── src/
│   ├── index.css
│   ├── main.jsx
│   ├── SpotifyApp.jsx
│
│   ├── api/
│   │   ├── spotifyConsumer/
│   │   ├── auth/
│   │   └── config/
│
│   ├── assets/
│   │   ├── backgroundGreen.png
│   │   ├── bgBlackColor.png
│   │   ├── bgImage.png
│   │   ├── profileMock.png
│   │   └── spotify_icon.png
│
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── reducers/
│   │   └── types/
│
│   ├── router/
│   │   └── AppRouter.jsx
│
│   └── spotifyConsumer/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       ├── pages/
│       └── reducers/
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

---

## 📜 Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Starts the development server            |
| `npm run build`   | Builds an optimized production version   |
| `npm run preview` | Previews the app in local production mode|

---

## 📸 Screenshots

> Add images or GIFs here to showcase the app's design and features.

---

## 📫 Contact

Have questions or suggestions? Contact us:

- Deiby Rendon - [GitHub](https://github.com/deibyren)
- Norbey Mejia - [GitHub](https://github.com/NMEJIA93)

---