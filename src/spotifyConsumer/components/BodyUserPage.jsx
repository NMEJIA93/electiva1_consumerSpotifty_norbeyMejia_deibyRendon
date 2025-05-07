export const BodyUserPage = ({ user, ownPlaylists, sharedPlaylists }) => {
  return (
    <section className="p-6 bg-spotify-black text-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Columna Izquierda: Perfil + Artistas */}
        <div className="w-full md:max-w-md flex flex-col gap-6">
          {/* Perfil */}
          <section className="bg-gradient-to-br from-spotify-green/10 to-black/90 p-6 rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-6">
              <img
                src={user.profilePicture}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-40 h-40 rounded-xl border-2 border-white object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">{user.firstName}</h2>
                <p className="text-sm text-gray-300 mb-2">Usuario de Spotify</p>
                <div className="text-sm text-gray-300 space-y-1">
                  <p><span className="text-white font-medium">Correo:</span> {user.email}</p>
                  <p><span className="text-white font-medium">Seguidores:</span> {user.followers}</p>
                  <p><span className="text-white font-medium">Suscripción:</span> {user.subscription}</p>
                  <p>
                    <a
                      href={user.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-spotify-green hover:underline font-medium"
                    >
                      Ver perfil Spotify
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Artistas Seguidos */}
          <section className="bg-gradient-to-br from-spotify-green/5 to-black/70 p-4 rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Artistas que sigues</h3>
            <ul className="space-y-4">
              {user.artistsFollowers.map((artist) => (
                <li key={artist.id} className="flex items-center gap-4">
                  <img
                    src={artist.images?.[1]?.url || artist.images?.[0]?.url || ''}
                    alt={artist.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-lg">{artist.name}</p>
                    <p className="text-sm text-gray-400">{artist.genres.join(', ')}</p>
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold">{artist.followers.total.toLocaleString()}</span> seguidores
                    </p>
                    <a
                      href={artist.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-spotify-green hover:underline text-sm"
                    >
                      Ver en Spotify
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Columna Derecha: Playlists */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Playlists Propias */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Mis Playlists</h3>
            <ul className="space-y-4">
              {ownPlaylists.map((playlist) => (
                <li
                  key={playlist.id}
                  className="p-4 bg-spotify-darkGray rounded-lg hover:bg-spotify-green hover:text-black transition-all flex items-start gap-4"
                >
                  <img
                    src={playlist.cover}
                    alt={playlist.name}
                    className="w-16 h-16 rounded-lg shadow-md"
                  />
                  <div>
                    <p className="font-medium text-lg">{playlist.name}</p>
                    <p className="text-sm text-gray-300">{playlist.description}</p>
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold">{playlist.followers}</span> seguidores
                    </p>
                    <p className="text-sm text-gray-400">Última actualización: {playlist.dateUpdate}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Playlists Compartidas */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Playlists Compartidas</h3>
            <ul className="space-y-4">
              {sharedPlaylists.map((playlist) => (
                <li
                  key={playlist.id}
                  className="p-4 bg-spotify-darkGray rounded-lg hover:bg-spotify-green hover:text-black transition-all flex items-start gap-4"
                >
                  <img
                    src={playlist.cover}
                    alt={playlist.name}
                    className="w-16 h-16 rounded-lg shadow-md"
                  />
                  <div>
                    <p className="font-medium text-lg">{playlist.name}</p>
                    <p className="text-sm text-gray-300">{playlist.description}</p>
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold">{playlist.followers}</span> seguidores
                    </p>
                    <p className="text-sm text-gray-400">Última actualización: {playlist.dateUpdate}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};