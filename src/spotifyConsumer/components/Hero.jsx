import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useContext } from "react";
import { UserProfileContext } from "../contexts/UserProfileContext";
import { userMock, ownPlaylists, sharedPlaylists, dataPorfil } from '../../mocks/mocks'

export const Hero = () => {
  const [search, setSearch] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [showAllOwnPlaylists, setShowAllOwnPlaylists] = useState(false);
  const [showAllFollowedPlaylists, setShowAllFollowedPlaylists] = useState(false);
  const { isDarkMode } = useTheme(); 
  const { profileState } = useContext(UserProfileContext);
  const { profile, errorMessage: error } = profileState;

  console.log('Estado global del perfil:', profileState);
  console.log('Perfil del usuario:', profile);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  if (!profile) return <h1>loading...</h1>

  // Usar playlists del perfil si están disponibles, sino usar los mocks
  const userOwnPlaylists = profile?.ownPlaylists || ownPlaylists || [];
  const userFollowedPlaylists = profile?.followedPlaylists || [];
  const allSharedPlaylists = sharedPlaylists || [];

  const allPlaylists = [...userOwnPlaylists, ...userFollowedPlaylists, ...allSharedPlaylists];

  const filteredPlaylists = allPlaylists.filter((playlist) =>
    playlist?.name?.toLowerCase().includes(search.toLowerCase())
  );

  // Filtrar playlists por tipo
  const filteredOwnPlaylists = filteredPlaylists.filter(playlist => 
    userOwnPlaylists?.some(own => own.id === playlist.id)
  );
  
  const filteredFollowedPlaylists = filteredPlaylists.filter(playlist => 
    userFollowedPlaylists?.some(followed => followed.id === playlist.id)
  );

  const filteredSharedPlaylists = filteredPlaylists.filter(playlist => 
    allSharedPlaylists?.some(shared => shared.id === playlist.id)
  );

  // Mostrar solo las primeras 3 playlists si no está expandido
  const displayedOwnPlaylists = showAllOwnPlaylists 
    ? filteredOwnPlaylists 
    : filteredOwnPlaylists.slice(0, 3);

  const displayedFollowedPlaylists = showAllFollowedPlaylists
    ? filteredFollowedPlaylists
    : filteredFollowedPlaylists.slice(0, 3);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}>
      <div className="h-16"></div>

      <div className="flex">
        {/* Main content area */}
        <div className="w-[70%] p-6 flex flex-col space-y-8 overflow-auto">
          {/* Search bar */}
          <div className="sticky top-0 z-10 bg-inherit pb-4">
            <input
              type="text"
              placeholder="Buscar playlist..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`p-3 rounded-lg w-full ${
                isDarkMode 
                  ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-red-500 border-gray-700' 
                  : 'bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2 transition-all duration-300`}
            />
          </div>

          {/* Playlists sections */}
          <div className="space-y-10">
            {/* Own playlists section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-red-500' : 'text-blue-600'}`}>
                    Tus Playlists
                  </h2>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? 'bg-gray-700 text-red-300' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {filteredOwnPlaylists.length} {filteredOwnPlaylists.length === 1 ? 'playlist' : 'playlists'}
                  </span>
                </div>
                
                {filteredOwnPlaylists.length > 3 && (
                  <button
                    onClick={() => setShowAllOwnPlaylists(!showAllOwnPlaylists)}
                    className={`text-sm px-3 py-1 rounded-full flex items-center ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-red-400' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                    } transition-colors duration-200`}
                  >
                    {showAllOwnPlaylists ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        Mostrar menos
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        Mostrar todas
                      </>
                    )}
                  </button>
                )}
              </div>
              
              {displayedOwnPlaylists.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedOwnPlaylists.map((playlist) => (
                    <div
                      key={playlist.id}
                      className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                          : 'bg-white hover:bg-blue-50 border border-gray-200 shadow-sm'
                      }`}
                      onClick={() => setSelectedPlaylist(playlist)}
                    >
                      <div className="relative">
                        <img 
                          src={playlist.images[0].url} 
                          alt={playlist.name} 
                          className="w-full h-40 object-cover"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 p-2 ${
                          isDarkMode ? 'bg-gradient-to-t from-gray-900 to-transparent' : 'bg-gradient-to-t from-white to-transparent'
                        }`}>
                          <h3 className="text-lg font-bold truncate">{playlist.name}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                          {playlist.description}
                        </p>
                        <div className="flex justify-between items-center mt-3 text-xs">
                          <span className={`px-2 py-1 rounded ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {playlist.tracks.total} canciones
                          </span>
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {playlist.dateUpdate}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`p-8 rounded-lg text-center ${
                  isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
                }`}>
                  {search ? 'No se encontraron playlists propias con ese nombre' : 'No tienes playlists propias'}
                </div>
              )}
            </section>

            {/* Followed playlists section */}
            {filteredFollowedPlaylists.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-purple-500' : 'text-purple-600'}`}>
                      Playlists Seguidas
                    </h2>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {filteredFollowedPlaylists.length} {filteredFollowedPlaylists.length === 1 ? 'playlist' : 'playlists'}
                    </span>
                  </div>
                  
                  {filteredFollowedPlaylists.length > 3 && (
                    <button
                      onClick={() => setShowAllFollowedPlaylists(!showAllFollowedPlaylists)}
                      className={`text-sm px-3 py-1 rounded-full flex items-center ${
                        isDarkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-purple-400' 
                          : 'bg-purple-100 hover:bg-purple-200 text-purple-600'
                      } transition-colors duration-200`}
                    >
                      {showAllFollowedPlaylists ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          Mostrar menos
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          Mostrar todas
                        </>
                      )}
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedFollowedPlaylists.map((playlist) => (
                    <div
                      key={`followed-${playlist.id}`}
                      className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                          : 'bg-white hover:bg-purple-50 border border-gray-200 shadow-sm'
                      }`}
                      onClick={() => setSelectedPlaylist(playlist)}
                    >
                      <div className="relative">
                        <img 
                          src={playlist.images[0].url} 
                          alt={playlist.name} 
                          className="w-full h-40 object-cover"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 p-2 ${
                          isDarkMode ? 'bg-gradient-to-t from-gray-900 to-transparent' : 'bg-gradient-to-t from-white to-transparent'
                        }`}>
                          <h3 className="text-lg font-bold truncate">{playlist.name}</h3>
                        </div>
                        <button
                          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                            isDarkMode 
                              ? 'bg-purple-600 text-white hover:bg-purple-700' 
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          } transition-colors duration-300 shadow-lg`}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Lógica para dejar de seguir playlist
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                          {playlist.description}
                        </p>
                        <div className="flex justify-between items-center mt-3 text-xs">
                          <span className={`px-2 py-1 rounded ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {playlist.tracks.total} canciones
                          </span>
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {playlist.followers} seguidores
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Recommended playlists section */}
            <section>
              <div className="flex items-center mb-4">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-red-500' : 'text-blue-600'}`}>
                  Playlists Recomendadas
                </h2>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                  isDarkMode ? 'bg-gray-700 text-red-300' : 'bg-blue-100 text-blue-800'
                }`}>
                  {filteredSharedPlaylists.length} {filteredSharedPlaylists.length === 1 ? 'playlist' : 'playlists'}
                </span>
              </div>
              
              {filteredSharedPlaylists.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredSharedPlaylists.map((playlist) => (
                    <div
                      key={`rec-${playlist.id}`}
                      className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                          : 'bg-white hover:bg-blue-50 border border-gray-200 shadow-sm'
                      }`}
                      onClick={() => setSelectedPlaylist(playlist)}
                    >
                      <div className="relative">
                        <img 
                          src={playlist.cover} 
                          alt={playlist.name} 
                          className="w-full h-40 object-cover"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 p-2 ${
                          isDarkMode ? 'bg-gradient-to-t from-gray-900 to-transparent' : 'bg-gradient-to-t from-white to-transparent'
                        }`}>
                          <h3 className="text-lg font-bold truncate">{playlist.name}</h3>
                        </div>
                        {profileState && (
                          <button
                            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                              isDarkMode 
                                ? 'bg-red-600 text-white hover:bg-red-700' 
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            } transition-colors duration-300 shadow-lg`}
                            onClick={(e) => {
                              e.stopPropagation();
                              // Lógica para añadir playlist
                            }}
                          >
                            <span className="text-xl font-bold">+</span>
                          </button>
                        )}
                      </div>
                      <div className="p-4">
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                          {playlist.description}
                        </p>
                        <div className="flex justify-between items-center mt-3 text-xs">
                          <span className={`px-2 py-1 rounded ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {playlist.songs.length} canciones
                          </span>
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {playlist.followers} seguidores
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`p-8 rounded-lg text-center ${
                  isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
                }`}>
                  {search ? 'No se encontraron playlists recomendadas con ese nombre' : 'No hay playlists recomendadas disponibles'}
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Playlist details panel */}
        <div className={`w-[30%] ${
          isDarkMode ? 'bg-gray-900 border-l border-gray-700' : 'bg-gray-50 border-l border-gray-200'
        } fixed right-0 top-16 bottom-0 transition-colors duration-300`}>
          <div 
            className={`h-full p-6 ${
              scrollEnabled ? "overflow-y-auto" : "overflow-hidden"
            }`}
            onMouseEnter={() => setScrollEnabled(true)}
            onMouseLeave={() => setScrollEnabled(false)}
          >
            {selectedPlaylist ? (
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={selectedPlaylist.images[0].url}
                    alt={selectedPlaylist.name}
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                  <div className={`absolute -bottom-3 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                    isDarkMode 
                      ? userOwnPlaylists?.some(own => own.id === selectedPlaylist.id) 
                        ? 'bg-red-600 text-white' 
                        : userFollowedPlaylists?.some(followed => followed.id === selectedPlaylist.id)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-700 text-red-400'
                      : userOwnPlaylists?.some(own => own.id === selectedPlaylist.id) 
                        ? 'bg-blue-600 text-white' 
                        : userFollowedPlaylists?.some(followed => followed.id === selectedPlaylist.id)
                          ? 'bg-purple-600 text-white'
                          : 'bg-blue-100 text-blue-800'
                  }`}>
                    {userOwnPlaylists?.some(own => own.id === selectedPlaylist.id) 
                      ? 'Tu playlist' 
                      : userFollowedPlaylists?.some(followed => followed.id === selectedPlaylist.id)
                        ? 'Seguida'
                        : 'Compartida'}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-2">{selectedPlaylist.name}</h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedPlaylist.description}
                </p>
                
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm font-medium">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Seguidores:</span> {selectedPlaylist.followers}
                    </p>
                    <p className="text-sm font-medium">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Canciones:</span> {selectedPlaylist.tracks.total}
                    </p>
                  </div>
                  <p className="text-sm">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Última modificación:</span> {selectedPlaylist.dateUpdate}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className={`text-lg font-semibold mb-3 pb-2 border-b ${
                    isDarkMode ? 'border-gray-700 text-red-500' : 'border-gray-200 text-blue-600'
                  }`}>
                    Canciones
                  </h3>
                  <ul className="space-y-3">
                    {/* {selectedPlaylist.songs.map((song, idx) => (
                      <li 
                        key={idx} 
                        className={`p-3 rounded-lg flex justify-between items-center ${
                          isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-50'
                        }`}
                      >
                        <div>
                          <p className="font-medium">{song.title}</p>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {song.artist} • {song.album}
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {song.duration}
                        </span>
                      </li>
                    ))} */}
                  </ul>
                </div>
              </div>
            ) : (
              <div className={`h-full flex flex-col items-center justify-center text-center p-8 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mb-4 opacity-50" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" 
                  />
                </svg>
                <h3 className="text-xl font-medium mb-2">Selecciona una playlist</h3>
                <p>Haz clic en cualquier playlist para ver sus detalles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};