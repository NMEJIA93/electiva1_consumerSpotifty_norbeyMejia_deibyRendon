import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

export const BodyUserPage = ({ user, dataProfile, isDarkMode, dataPorfil }) => {
  const { isDarkMode: themeDarkMode } = useTheme();
  const darkMode = isDarkMode ?? themeDarkMode;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  console.log("user", user);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 space-y-8">
            {/* Profile Card */}
            <div
              className={`rounded-2xl overflow-hidden shadow-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="h-40 bg-gradient-to-r from-green-500 to-blue-600 relative">
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                  <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden">
                    <img
                      src={user?.profilePicture}
                      alt={`${user?.firstName} ${user?.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="pt-24 pb-8 px-8 text-center">
                <h2 className="text-3xl font-bold mb-2">
                  {user?.firstName || "Usuario"}
                </h2>
                <p
                  className={`text-sm mb-6 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  
                >
                  {user.connectWithSpotify? ("Usuario de Spotify") : ("Usuario ")} 
                </p>

                {user.connectWithSpotify ? (
                  <a
                    href={user?.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.78-.12-.9-.48-.12-.36.12-.78.48-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.661.36 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Ver en Spotify
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 bg-gray-400 cursor-not-allowed text-white font-medium py-3 px-6 rounded-full shadow-lg opacity-50"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.78-.12-.9-.48-.12-.36.12-.78.48-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.661.36 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Ver en Spotify
                  </button>
                )}
              </div>

              {/* Profile Details */}
              {user.connectWithSpotify ? (
                <div className="px-8 pb-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 uppercase tracking-wider ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Correo
                    </label>
                    <div
                      className={`p-4 rounded-xl border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50 border-gray-200"
                      } shadow-sm`}
                    >
                      <p className="truncate font-medium">
                        {user?.email || "No disponible"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 uppercase tracking-wider ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      País
                    </label>
                    <div
                      className={`p-4 rounded-xl border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50 border-gray-200"
                      } shadow-sm`}
                    >
                      <p className="font-medium">
                        {user?.country || "No disponible"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 uppercase tracking-wider ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Suscripción
                    </label>
                    <div
                      className={`p-4 rounded-xl border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50 border-gray-200"
                      } shadow-sm`}
                    >
                      <p className="font-medium">
                        {user?.subscription || "No disponible"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 uppercase tracking-wider ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Seguidores
                    </label>
                    <div
                      className={`p-4 rounded-xl border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50 border-gray-200"
                      } shadow-sm`}
                    >
                      <p className="font-medium">
                        {user?.followers?.total?.toLocaleString() || "0"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              ) : (
                <div className="px-8 pb-8 space-y-6">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 uppercase tracking-wider ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Correo
                    </label>
                    <div
                      className={`p-4 rounded-xl border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50 border-gray-200"
                      } shadow-sm`}
                    >
                      <p className="truncate font-medium">
                        {user?.email || "No disponible"}
                      </p>
                    </div>
                  </div>
                  </div>
                
              )}
              </div>
              </div>
              
              
          <div className="lg:w-2/3 space-y-8">
            {/* Artists Section */}
            {user.connectWithSpotify && (
            <div
              className={`rounded-2xl shadow-xl p-8 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Artistas Seguidos</h2>
                {user?.artistsFollowers?.length > 0 && (
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-800 border border-gray-300 shadow-sm"
                    }`}
                  >
                    {user.artistsFollowers.length} artistas
                  </span>
                )}
              </div>

              {user?.artistsFollowers?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {user.artistsFollowers.map((artist) => (
                    <div
                      key={artist.id}
                      className={`rounded-xl p-5 flex items-center gap-4 border ${
                        darkMode
                          ? "hover:bg-gray-700/50 border-gray-700"
                          : "hover:bg-gray-50 border-gray-200"
                      } transition-colors shadow-sm`}
                    >
                      <img
                        src={
                          artist.images?.[1]?.url ||
                          artist.images?.[0]?.url ||
                          ""
                        }
                        alt={artist.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg truncate">
                          {artist.name}
                        </h3>
                        <p
                          className={`text-xs mt-1 truncate ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {artist.genres.slice(0, 2).join(", ")}
                        </p>
                        <div className="flex flex-wrap items-center justify-between mt-3 gap-2">
                          <span
                            className={`text-xs whitespace-nowrap ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {artist.followers.total.toLocaleString()} seguidores
                          </span>
                          <a
                            href={artist.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 text-xs font-semibold flex items-center gap-1 whitespace-nowrap"
                          >
                            Ver
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={`text-center py-16 rounded-xl border ${
                    darkMode
                      ? "bg-gray-700/30 border-gray-700"
                      : "bg-gray-50 border-gray-200"
                  } shadow-sm`}
                >
                  <p
                    className={`text-lg mb-6 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    No sigues a ningún artista todavía
                  </p>
                  <a
                    href="https://open.spotify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold px-6 py-3 border border-green-600 hover:border-green-700 rounded-full transition-colors"
                  >
                    Explorar artistas en Spotify
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              )}
            </div>
            )}

            {/* Spotify Stats Section */}
            {user.connectWithSpotify ? (
              <div
                className={`w-full rounded-2xl shadow-xl p-8 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } transition-colors duration-300`}
              >
                <h1 className="text-3xl font-bold mb-8 pb-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}">
                  Estadísticas de Spotify
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Stats Card 1 */}
                  <div
                    className={`p-6 rounded-xl border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    } shadow-md transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          darkMode
                            ? "bg-gray-600"
                            : "bg-white border border-gray-200 shadow-sm"
                        }`}
                      >
                        <svg
                          className="w-7 h-7 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Playlists</h3>
                    </div>
                    <p className="text-4xl font-bold text-green-500">
                      {user?.ownPlaylists?.length || 0}
                    </p>
                    <p
                      className={`text-sm mt-2 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      playlists creadas
                    </p>
                  </div>

                  {/* Stats Card 2 */}
                  <div
                    className={`p-6 rounded-xl border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    } shadow-md transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          darkMode
                            ? "bg-gray-600"
                            : "bg-white border border-gray-200 shadow-sm"
                        }`}
                      >
                        <svg
                          className="w-7 h-7 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">
                        Géneros Favoritos
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                      {user?.favoriteGenres
                        ?.slice(0, 3)
                        .map((genre, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-full text-sm font-medium border ${
                              darkMode
                                ? "bg-purple-900/30 text-purple-300 border-purple-700"
                                : "bg-purple-100 text-purple-800 border-purple-200 shadow-sm"
                            }`}
                          >
                            {genre}
                          </span>
                        ))}
                      {(!dataPorfil?.stats?.favoriteGenre ||
                        dataPorfil.stats.favoriteGenre.length === 0) && (
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          No hay datos
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Stats Card 3 */}
                  <div
                    className={`p-6 rounded-xl border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    } shadow-md transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          darkMode
                            ? "bg-gray-600"
                            : "bg-white border border-gray-200 shadow-sm"
                        }`}
                      >
                        <svg
                          className="w-7 h-7 text-yellow-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">
                        Artistas Favoritos
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {user?.artistsTop?.slice(0, 3).map(
                        (artist, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <img
                              src={artist.image || ""}
                              alt={artist.name}
                              className="w-8 h-8 rounded-full object-cover border border-gray-300 shadow-sm"
                            />
                            <a
                              href={artist.profileLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-sm hover:underline ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {artist.name}
                            </a>
                          </div>
                        )
                      )}
                      {(!dataPorfil?.stats?.FavoriteArtist ||
                        dataPorfil.stats.FavoriteArtist.length === 0) && (
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          No hay datos disponibles
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Stats Card 4 */}
                  <div
                    className={`p-6 rounded-xl border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    } shadow-md transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          darkMode
                            ? "bg-gray-600"
                            : "bg-white border border-gray-200 shadow-sm"
                        }`}
                      >
                        <svg
                          className="w-7 h-7 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">
                        Últimas Reproducciones
                      </h3>
                    </div>
                    {user?.tracksTop &&
                    user?.tracksTop.length > 0 ? (
                      <ul className="space-y-4">
                        {user?.tracksTop
                          .slice(0, 2)
                          .map((tracksTop, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div
                                className={`w-12 h-12 rounded-md overflow-hidden border ${
                                  darkMode
                                    ? "bg-gray-600 border-gray-500"
                                    : "bg-white border-gray-200"
                                } shadow-sm`}
                              >
                                {tracksTop.cover && (
                                  <img
                                    src={tracksTop.cover}
                                    alt={tracksTop.name}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium truncate text-blue-500">
                                  {tracksTop.name}
                                </p>
                                <p
                                  className={`text-xs truncate ${
                                    darkMode ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  {tracksTop.artist} • {tracksTop.album}
                                </p>
                              </div>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-gray-500" : "text-gray-600"
                                }`}
                              >
                                {tracksTop.duration}
                              </span>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        No hay reproducciones recientes
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`w-full rounded-2xl shadow-xl p-10 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } text-center transition-colors duration-300`}
              >
                <div className="max-w-md mx-auto">
                  <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                    alt="Spotify Logo"
                    className="h-14 mx-auto mb-8"
                  />
                  <h2 className="text-2xl font-bold mb-4">
                    Conecta tu cuenta de Spotify
                  </h2>
                  <p
                    className={`text-base mb-8 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Desbloquea estadísticas personalizadas, recomendaciones
                    exclusivas y descubre nuevos insights sobre tu música.
                  </p>
                  <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all flex items-center justify-center mx-auto gap-3 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Conectar con Spotify
                  </button>
                  <p
                    className={`text-xs mt-8 ${
                      darkMode ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    Solo solicitaremos acceso a tus datos básicos y actividad de
                    reproducción.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};