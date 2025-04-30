export const DesktopMenu = ({ links, navigate }) => (
  <div className="hidden md:block">
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li key={link.id}>
          <a
            rel="noopener noreferrer"
            className="inline-block text-gray-300 sm:text-xl text-sm hover:text-green-500 transition-transform hover:scale-105"
            href={link.link}
            onClick={() => navigate(link.link, { replace: true })}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);