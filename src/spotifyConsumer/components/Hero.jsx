

export const Hero = () => {
  return (
    <section className="mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-10 md:p-16 lg:p-20 xl:p-24">
          <p className="py-12 text-green-950 text-justify text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Magic Quest es un emocionante juego de aventuras en un
            mundo de fantasía donde te embarcas en una épica
            búsqueda mágica. Explora reinos misteriosos, domina
            poderosos hechizos y enfréntate a criaturas legendarias
            mientras desvelas secretos ocultos y te conviertes en el
            héroe supremo. ¡La magia está en tus manos!
          </p>
          <div className="flex justify-start gap-4">
            <a
              className="bg-green-500 py-2 px-12 rounded-3xl text-white flex items-center gap-2
              hover:bg-green-700 transition-all duration-300 cursor-pointer"
              href="https://www.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a Spotify
              <i className="bi bi-spotify text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

