import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import IconSpotify from '../../assets/spotify_icon.png'
import { DesktopMenu, DesktopProfileMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'


const navbarlinks = [
  { id: 1, title: 'Login', link: '/login' },
  { id: 2, title: 'Register', link: '/'},

]

export const PublicNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-1">
        {/* Logo */}
        <div>
          <img src={IconSpotify} alt="Logo Spotify" className="w-[50px]" />
        </div>

        {/* Menú de escritorio */}
        <DesktopMenu links={navbarlinks} navigate={navigate} />

        {/* Botón de menú móvil */}
        <button onClick={toggleMenu} className="text-white md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6H16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <MobileMenu
        isOpen={isOpen}
        links={navbarlinks}
        closeMenu={() => setIsOpen(false)}
        toggleMenu={toggleMenu}
        navigate={navigate}
      />
    </nav>
  );
};