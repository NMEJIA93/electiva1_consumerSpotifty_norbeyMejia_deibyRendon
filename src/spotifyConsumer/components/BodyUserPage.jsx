export const BodyUserPage = ({ user, ownPlaylists, sharedPlaylists }) => {
  return (
    <section className="p-6 bg-spotify-black text-white min-h-screen">
      <section className="mb-12 bg-gradient-to-r from-spotify-green to-green-600 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-6">
          <img
            src={user.profilePicture}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-white">{`${user.firstName} ${user.lastName}`}</h2>
            <p className="text-lg text-white">Usuario de Spotify</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto">
        <div className="bg-spotify-darkGray p-6 rounded-lg shadow-lg ">
          <h3 className="text-xl font-semibold mb-4 text-white text-center">Mis Playlists</h3>
          <ul className="space-y-2">
            {ownPlaylists.map((playlist) => (
              <li
                key={playlist.id}
                className="p-4 bg-spotify-darkGray rounded-lg hover:bg-spotify-green hover:text-black transition-all"
              >
                <p className="font-medium">{playlist.name}</p>
                <p className="text-sm  text-white">{playlist.description}</p>
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
                <p className="text-sm text-white">{playlist.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};