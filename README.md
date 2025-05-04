# Consumer Spotify App 🎵

## Team Members
- **Deiby Rendon**
- **Norbey Mejia**

Esta es una aplicación web desarrollada con **React** y **Vite** que permite a los usuarios interactuar con la API de Spotify. Los usuarios pueden iniciar sesión, explorar su perfil, ver sus playlists y realizar acciones relacionadas con la música.

## 🛠️ **Tecnologías utilizadas**
- **React** ⚛️: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite** ⚡: Herramienta de desarrollo rápida y ligera.
- **TailwindCSS** 🎨: Framework de utilidades CSS para diseño moderno y responsivo.
- **JavaScript** 📜: Lenguaje de programación utilizado para el desarrollo de la aplicación.
- **Axios** 🌐: Cliente HTTP para interactuar con la API de Spotify.
- **React Router** 🛣️: Manejo de rutas en la aplicación.
- **Bootstrap Icons** 🎯: Íconos para mejorar la interfaz.


## Características principales 🚀

- **Inicio de sesión**:
  - Inicia sesión con correo y contraseña.
  - Autenticación mediante Google y Spotify (OAuth2 con PKCE).
- **Integración con Spotify**:
  - Recupera información del perfil del usuario desde la API de Spotify.
  - Muestra playlists propias y compartidas.
- **Diseño moderno**:
  - Utiliza **TailwindCSS** con una paleta de colores personalizada basada en Spotify.
  - Diseño responsivo para dispositivos móviles y escritorio.
- **Validaciones**:
  - Validación en tiempo real en formularios de registro.
- **Rutas protegidas**:
  - Redirección de usuarios no autenticados.

## 🎨 **Descripción de UX/UI de las páginas**

### 🏠 **HomePage**
- **Diseño**: Página de inicio con un fondo dinámico y un diseño atractivo que utiliza la paleta de colores de Spotify.
- **Componentes principales**:
  - **PublicNavbar**: Barra de navegación fija con enlaces a las páginas de inicio de sesión y registro.
  - **Hero**: Sección destacada con un mensaje introductorio y un botón para redirigir a Spotify.
- **Experiencia de usuario**: 
  - Navegación clara y accesible.
  - Diseño responsivo que se adapta a dispositivos móviles y de escritorio.


---

### 🔑 **LoginPage**
- **Diseño**: Página de inicio de sesión con un fondo oscuro y un formulario centrado.
- **Componentes principales**:
  - Campos para ingresar correo electrónico y contraseña.
  - Botones para iniciar sesión con Google y Spotify.
  - Botón de "Cancelar" para regresar a la página principal.
- **Experiencia de usuario**:
  - Validaciones en tiempo real para los campos del formulario.
  - Botones con transiciones suaves y colores que destacan.

---

### 📝 **RegisterPage**
- **Diseño**: Página de registro con un fondo verde y un formulario limpio y organizado.
- **Componentes principales**:
  - Campos para ingresar nombre, apellido, correo electrónico, contraseña y confirmación de contraseña.
  - Botones de "Crear cuenta" y "Cancelar".
- **Experiencia de usuario**:
  - Validaciones en tiempo real para garantizar la calidad de los datos ingresados.
  - Mensajes de error claros y visibles debajo de los campos.

---

### 👤 **UserPage**
- **Diseño**: Página personalizada para el usuario autenticado, con un fondo verde y secciones bien definidas.
- **Componentes principales**:
  - **PrivateNavbar**: Barra de navegación con enlaces a las secciones del usuario.
  - **BodyUserPage**: Muestra el perfil del usuario, sus playlists propias y compartidas.
- **Experiencia de usuario**:
  - Información del usuario presentada de manera clara y visualmente atractiva.
  - Playlists organizadas en tarjetas con detalles como nombre, descripción, seguidores y fecha de actualización.

---

### 🔄 **SpotifyCallback**
- **Diseño**: Página de redirección después de la autenticación con Spotify.
- **Componentes principales**:
  - Mensaje de carga mientras se procesa el token de acceso.
  - Mensaje de error en caso de fallos, con un botón para regresar al inicio de sesión.
- **Experiencia de usuario**:
  - Proporciona retroalimentación clara al usuario durante el proceso de autenticación.

---

## 📋 **Qué más debe tener un README bien documentado**

1. **Instalación y configuración**:
   - Instrucciones claras para clonar el repositorio, instalar dependencias y ejecutar el proyecto.
   - Ejemplo:
     ```bash
     git https://github.com/NMEJIA93/electiva1_consumerSpotifty_norbeyMejia_deibyRendon.git
     cd electiva1_consumerSpotifty_norbeyMejia_deibyRendon
     npm install
     npm run dev
     ```

2. **Estructura del proyecto**:
   - Diagrama o lista que explique la organización de carpetas y archivos.
   - Ejemplo:
     ```
├── public/                       # Archivos públicos accesibles desde el navegador
│   ├── vite.svg                 # Ícono de Vite
│
├── src/                          # Código fuente principal
│   ├── index.css               # Estilos globales
│   ├── main.jsx                # Punto de entrada principal de la aplicación
│   ├── SpotifyApp.jsx          # Componente raíz de la aplicación
│
│   ├── api/                     # Configuración e integración con la API de Spotify
│   │   ├── spotifyConsumer/
│   │   ├── auth/               # Lógica de autenticación con Spotify
│   │   ├── config/             # Configuración general de la API
│
│   ├── assets/                  # Recursos estáticos (imágenes, íconos, etc.)
│   │   ├── backgroundGreen.png
│   │   ├── bgBlackColor.png
│   │   ├── bgImage.png
│   │   ├── profileMock.png
│   │   ├── spotify_icon.png
│
│   ├── auth/                    # Módulo de autenticación
│   │   ├── components/         # Componentes de la interfaz relacionados con auth
│   │   ├── hooks/              # Hooks personalizados para autenticación
│   │   ├── pages/              # Páginas de autenticación (Login, Register)
│   │   ├── reducers/           # Reducers para manejar estado de autenticación
│   │   ├── types/              # Tipos de acciones y constantes para auth
│
│   ├── router/                  # Configuración de rutas
│   │   ├── AppRouter.jsx       # Definición de rutas principales
│
│   ├── spotifyConsumer/        # Módulo principal de interacción con Spotify
│       ├── components/         # Componentes relacionados con usuario y Spotify
│       ├── contexts/           # Contextos para manejo de estado global
│       ├── hooks/              # Hooks personalizados para Spotify
│       ├── pages/              # Páginas principales (HomePage, UserPage, etc.)
│       ├── reducers/           # Reducers para el estado del consumidor de Spotify
│
├── .gitignore                   # Archivos y carpetas ignorados por Git
├── eslint.config.js             # Configuración de ESLint
├── index.html                   # Archivo HTML principal
├── package.json                 # Dependencias y scripts del proyecto
├── postcss.config.js            # Configuración de PostCSS
├── README.md                    # Documentación del proyecto
├── tailwind.config.js           # Configuración de TailwindCSS
├── vite.config.js               # Configuración de Vite```

3. **Scripts disponibles**:
   - Lista de comandos útiles para desarrollo y producción.
   - Ejemplo:
     - `npm run dev`: Inicia el servidor de desarrollo.
     - `npm run build`: Genera una versión optimizada para producción.





6. **Capturas de pantalla o GIFs**:
   - Imágenes que muestren el diseño y las funcionalidades de la aplicación.

---
