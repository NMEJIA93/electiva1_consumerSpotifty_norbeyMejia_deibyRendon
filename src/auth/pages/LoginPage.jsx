import { useState, useEffect } from 'react';
import { useAuthActions } from '../hooks/useAuthActions';
import bgBackground from '../../assets/bgBlackColor.png';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useTheme } from '../../hooks/useTheme';
import Logo from '../../assets/Logo.png';
import { useForm } from '../../hooks/useForm';


export const LoginPage = () => {
    const { loginWithSpotify } = useContext(UserContext);
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const {
        onCancel,
        onLoginUser,
        handleGoogleCallback,
        onLoginWithFacebook,
        onNavigateToRegister,
    } = useAuthActions();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const { email, password, onInputChange } = useForm()
    const { isDarkMode , toggleTheme} = useTheme();  

    const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
    const toggleRegister = () => setIsRegisterOpen(!isRegisterOpen);

    const handlePasswordChange = (e) => {
        onInputChange(e);
        setPasswordsMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordsMatch(password === e.target.value); 
    };
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        window.dispatchEvent(new Event("storage"));
      }, [isDarkMode]);

    return (
        /*<div
            className="min-h-screen flex flex-col items-center justify-center bg-spotify-black text-white"
            style={{ backgroundImage: `url(${bgBackground})` }}
        >
            <div className="bg-spotify-darkGray p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-8 text-center">Iniciar Sesión</h1>
                <div className="space-y-4">
                    <div>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-spotify-black text-white border border-spotify-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-spotify-green"
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-spotify-black text-white border border-spotify-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-spotify-green"
                            />
                            <button
                                onClick={onLoginUser}
                                className="w-full py-2 bg-spotify-green hover:bg-green-600 text-black rounded-lg transition-all"
                            >
                                Iniciar sesión
                            </button>

                            <button
                                onClick={onCancel}
                                className="w-full py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all"
                            >
                                Cancelar
                            </button>
                        </div>
                        <div className="flex items-center justify-center my-4">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="px-4 text-gray-400">OR</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                    </div>
                    <div id="google-signin-button">
                        <button
                            onClick={handleGoogleCallback}
                            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all flex items-center justify-center"
                        >
                            <i className="bi bi-google mr-3"></i>
                            Google
                        </button>
                    </div>
                    <button
                        onClick={onLoginWithFacebook}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                    >
                        <i className="bi bi-facebook mr-3"></i>
                        Facebook
                    </button>
                    <button
                        onClick={loginWithSpotify}
                        className="w-full py-2 bg-spotify-green hover:bg-green-600 text-white rounded-lg transition-all"
                    >
                        <i className="bi bi-spotify mr-3"></i>
                        Iniciar sesión con Spotify
                    </button>
                    <button
                        onClick={onNavigateToRegister}
                        className="w-full py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-all"
                    >
                        Crear una cuenta
                    </button>
                </div>
            </div>
        </div>*/
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
          {/* Navbar */}
          <nav className={`fixed top-0 left-0 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-800'} w-full bg-opacity-60 backdrop-blur-md z-50 transition-colors duration-300`}>
            <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
              {/* Logo */}
              <div>
                {Logo ? (
                  <img src={Logo} alt="Logo del sitio" className="w-[50px]" />
                ) : (
                  <span className="text-white text-lg">Logo</span>
                )}
              </div>
              {/* Login and Register */}
              <div className="flex space-x-4">
                <button
                  onClick={toggleLogin}
                  className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                >
                  Login
                </button>
                <button
                  onClick={toggleRegister}
                  className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                >
                  Register
                </button>
                {/* Theme Toggle Button - Desktop */}
                <div className="flex items-center">
                  <button
                    onClick={toggleTheme}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-blue-100 hover:bg-blue-200 text-gray-800'
                    }`}
                    aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                  >
                    {isDarkMode ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <span className="text-sm">Modo Oscuro</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm">Modo Claro</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>
    
          {/* Login Modal */}
          {isLoginOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg w-80 transition-colors duration-300`}>
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formElements = e.target.elements;
                    const usuario = formElements[0].value.trim();
                    const contraseña = formElements[1].value.trim();
    
                    if (!usuario || !contraseña) {
                      alert("Todos los campos deben estar llenos");
                      return;
                    }
    
                    console.log("Formulario enviado con éxito");
                  }}
                >
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Usuario</label>
                    <input
                      name="email"
                      type="text"
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contraseña</label>
                    <div className="relative">
                      <input
                        name="password"
                        type={isPasswordVisible ? "text" : "password"}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-800'
                        }`}
                        onChange={onInputChange}
                      />
                      <button
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className={`absolute inset-y-0 right-0 px-3 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        <i className={`bi ${isPasswordVisible ? "bi-eye" : "bi-eye-slash"} w-5 h-5`}></i>
                      </button>
                    </div>
                  </div>
                  <button
                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                    onClick={onLoginUser}
                  >
                    Iniciar Sesión
                  </button>
                </form>
                <div className="mt-6">
                  <div className="flex justify-center space-x-4">
                    <button
                      className="flex items-center justify-center bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition w-full"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                    <button
                      className="flex items-center justify-center bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition w-full"
                    >
                      <i className="bi bi-google"></i>
                    </button>
                    <button
                      className="flex items-center justify-center bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition w-full "
                      onClick={loginWithSpotify}  
                    >
                      <i className="bi bi-spotify"></i>
                    </button>
                  </div>
                </div>
                <button
                  onClick={toggleLogin}
                  className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} hover:underline`}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
    
          {/* Register Modal */}
          {isRegisterOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg w-80 transition-colors duration-300`}>
                <h2 className="text-xl font-bold mb-4">Registro</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!passwordsMatch) {
                      alert("Las contraseñas no coinciden");
                      return;
                    }
                    toggleRegister();
                  }}
                >
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Usuario</label>
                    <input
                      name="email"
                      type="text"
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contraseña</label>
                    <div className="relative">
                      <input
                        name="password"
                        type={isPasswordVisible ? "text" : "password"}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-800'
                        }`}
                        onChange={handlePasswordChange}
                      />
                      <button
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className={`absolute inset-y-0 right-0 px-3 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        <i className={`bi ${isPasswordVisible ? "bi-eye" : "bi-eye-slash"} w-5 h-5`}></i>
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Confirmar Contraseña</label>
                    <div className="relative">
                      <input
                        name="confirmPassword"
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-800'
                        }`}
                        onChange={handleConfirmPasswordChange}
                      />
                      <button
                        type="button"
                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                        className={`absolute inset-y-0 right-0 px-3 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        <i className={`bi ${isConfirmPasswordVisible ? "bi-eye" : "bi-eye-slash"} w-5 h-5`}></i>
                      </button>
                    </div>
                    {!passwordsMatch && (
                      <p className="text-red-500 text-sm mt-1">Las contraseñas no coinciden</p>
                    )}
                  </div>
                  <button
                    id="register-button"
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Registrarse
                  </button>
                </form>
                <div className="mt-6">
                  <div className="flex justify-center space-x-4">
                    <button
                      className="flex items-center justify-center bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition w-full"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>
                    <button
                      className="flex items-center justify-center bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition w-full"
                    >
                      <i className="bi bi-google"></i>
                    </button>
                    <button
                      className="flex items-center justify-center bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition w-full"
                    >
                      <i className="bi bi-spotify"></i>
                    </button>
                  </div>
                </div>
                <button
                  onClick={toggleRegister}
                  className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} hover:underline`}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>

    );
};

export default LoginPage;