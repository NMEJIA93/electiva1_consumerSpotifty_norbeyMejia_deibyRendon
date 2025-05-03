export const MobileMenu = ({ isOpen, links, navigate }) => (
  <>
    {/* Menú móvil */}
    <div
      className={` md:hidden absolute w-full bg-black bg-opacity-90 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <ul className="flex flex-col px-4 py-2">
        {links.map((link) => (
          <li key={link.id} className="py-2 text-center">
            <a
              rel="noopener noreferrer"
              href={link.link}
              onClick={() => navigate(link.link, { replace: true })}
              className="text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
);