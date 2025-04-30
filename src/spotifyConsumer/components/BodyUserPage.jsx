export const BodyUserPage = ({ user, ownPlaylists, sharedPlaylists }) => {
    return (
      <section className="p-6 bg-spotify-black text-spotify-gray min-h-screen">
        <section className="mb-8">
          <div className="flex items-center gap-4">
            <img
              src={user.profilePicture}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-20 h-20 rounded-full border-2 border-spotify-green"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">{`${user.firstName} ${user.lastName}`}</h2>
              <p className="text-spotify-gray">Usuario de Spotify</p>
            </div>
          </div>
        </section>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Mis Playlists</h3>
            <ul className="space-y-2">
              {ownPlaylists.map((playlist) => (
                <li
                  key={playlist.id}
                  className="p-4 bg-spotify-darkGray rounded-lg hover:bg-spotify-green hover:text-black transition-all"
                >
                  <p className="font-medium">{playlist.name}</p>
                  <p className="text-sm text-spotify-gray">{playlist.description}</p>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Playlists Compartidas</h3>
            <ul className="space-y-2">
              {sharedPlaylists.map((playlist) => (
                <li
                  key={playlist.id}
                  className="p-4 bg-spotify-darkGray rounded-lg hover:bg-spotify-green hover:text-black transition-all"
                >
                  <p className="font-medium">{playlist.name}</p>
                  <p className="text-sm text-spotify-gray">{playlist.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    );
  };