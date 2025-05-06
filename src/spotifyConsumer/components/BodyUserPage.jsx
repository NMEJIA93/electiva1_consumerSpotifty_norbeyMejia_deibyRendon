export const BodyUserPage = ({ user, ownPlaylists, sharedPlaylists }) => {
  return (
    <section className="p-6 bg-spotify-black text-white min-h-screen">
     
      <section className="mb-12 bg-gradient-to-r from-spotify-green to-spotify-gr3 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-6 justify-between">
        
          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-white">{`${user.firstName}`}</h2>
            <p className="text-lg text-white">Usuario de Spotify</p>
            <p className="text-sm text-gray-300">Correo: {user.email}</p>
            <p className="text-sm text-gray-300">Seguidores: {user.followers}</p>
            <p className="text-sm text-gray-300">Suscripción: {user.subscription}</p>
            <p className="text-sm text-gray-300">perfil spotify: {user.profileLink}</p>
          </div>
        
          <div className="flex-shrink-0">
            <img
              src={user.profilePicture}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>
      </section>

    
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto">
     
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
      </section>
    </section>
  );
};