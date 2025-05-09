export const DesktopMenu = ({ links, navigate }) => (
  <div className="hidden md:block">
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li key={link.id}>
          {link.action ? (
            <button
              onClick={link.action}
              className="inline-block text-gray-300 sm:text-xl text-sm hover:text-green-500 transition-transform hover:scale-105"
            >
              {link.title}
            </button>
          ) : (
            <a
              rel="noopener noreferrer"
              className="inline-block text-gray-300 sm:text-xl text-sm hover:text-green-500 transition-transform hover:scale-105"
              href={link.link}
              onClick={() => navigate(link.link, { replace: true })}
            >
              {link.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export const DesktopProfileMenu = ({ isOpen, links, toggleMenu, closeMenu }) => (
  <div className="relative">
    {/* Menú desplegable */}
    <div
      className={`absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-lg shadow-lg transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <ul className="flex flex-col px-4 py-2">
        {links.map((link) => (
          <li key={link.id} className="py-2 text-center">
            {link.action ? (
              <button
                onClick={() => {
                  link.action();
                  closeMenu();
                }}
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                {link.title}
              </button>
            ) : (
              <a
                rel="noopener noreferrer"
                href={link.link}
                onClick={closeMenu}
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);