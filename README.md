# Consumer Spotify App 🎵  
Aplicación React que permite explorar tu perfil de Spotify, playlists y más. Desarrollada con Vite, TailwindCSS y autenticación OAuth2 (PKCE) con Spotify.

## 👥 Team Members
- **Deiby Rendon**
- **Norbey Mejia**

---

## 🛠️ Tecnologías utilizadas

- **React** ⚛️: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite** ⚡: Herramienta de desarrollo rápida y ligera.
- **TailwindCSS** 🎨: Framework de utilidades CSS para diseño moderno y responsivo.
- **JavaScript** 📜: Lenguaje de programación utilizado para el desarrollo de la aplicación.
- **Axios** 🌐: Cliente HTTP para interactuar con la API de Spotify.
- **React Router** 🛣️: Manejo de rutas en la aplicación.
- **Bootstrap Icons** 🎯: Íconos para mejorar la interfaz.

---

## 🚀 Características principales

- **Inicio de sesión**:
  - Inicia sesión con correo y contraseña.
  - Autenticación mediante Google y Spotify (OAuth2 con PKCE).
- **Integración con Spotify**:
  - Recupera información del perfil del usuario desde la API de Spotify.
  - Muestra playlists propias y compartidas.
- **Diseño moderno**:
  - Utiliza TailwindCSS con una paleta de colores personalizada basada en Spotify.
  - Diseño responsivo para dispositivos móviles y escritorio.
- **Validaciones**:
  - Validación en tiempo real en formularios de registro.
- **Rutas protegidas**:
  - Redirección de usuarios no autenticados a login.

---

## 🎨 Diseño UX/UI de las páginas

### 🏠 HomePage
- **Diseño**: Página de inicio con fondo dinámico y paleta de colores de Spotify.
- **Componentes principales**: `PublicNavbar`, `Hero`.
- **Experiencia de usuario**: Navegación clara y diseño adaptable a todos los dispositivos.

### 🔑 LoginPage
- **Diseño**: Fondo oscuro con formulario centrado.
- **Componentes principales**: Campos de login, botones de Google y Spotify, botón de cancelar.
- **UX**: Validación en tiempo real y transiciones suaves.

### 📝 RegisterPage
- **Diseño**: Fondo verde, formulario organizado.
- **Componentes principales**: Campos de nombre, correo, contraseña, y botones de acción.
- **UX**: Validaciones y mensajes de error visibles.

### 👤 UserPage
- **Diseño**: Página personalizada con fondo verde.
- **Componentes**: `PrivateNavbar`, `BodyUserPage`.
- **UX**: Visualización clara de información de usuario y playlists.

### 🔄 SpotifyCallback
- **Diseño**: Página intermedia tras autenticación Spotify.
- **Componentes**: Mensajes de carga y error.
- **UX**: Retroalimentación clara durante el proceso de autenticación.

---

## 📦 Instalación y configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/NMEJIA93/electiva1_consumerSpotifty_norbeyMejia_deibyRendon.git
   cd electiva1_consumerSpotifty_norbeyMejia_deibyRendon
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 📁 Estructura del proyecto

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

## 📜 Scripts disponibles

| Comando           | Descripción                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo         |
| `npm run build`   | Genera una versión optimizada            |
| `npm run preview` | Visualiza la app en modo producción local|

---

## 📸 Capturas de pantalla

> Puedes agregar imágenes o GIFs aquí que muestren el diseño y las funcionalidades de la app.

---

## 📫 Contacto

¿Tienes preguntas o sugerencias? Contáctanos:

- Deiby Rendon - [GitHub](https://github.com/deibyren)
- Norbey Mejia - [GitHub](https://github.com/NMEJIA93)

---