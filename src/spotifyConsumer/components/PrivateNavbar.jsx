import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import IconSpotify from '../../assets/spotify_icon.png'
import { DesktopProfileMenu } from './DesktopMenu'
import { UserContext } from '../../auth/context/UserContext'


export const PrivateNavbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { logout,logoutWithSpotify } = useContext(UserContext);

    const toggleMenu = () => setIsOpen(!isOpen);

    const logoutUser = () => {
        logoutWithSpotify();
        navigate('/login', { replace: true });
    };


    const navbarProfilelinks = [
        { id: 1, title: 'Inicio', link: '/' },
        { id: 2, title: 'Perfil', link: '/userpage' },
        { id: 3, title: 'Listas', link: '/' },
        { id: 4, title: 'Preferencias', link: '/' },
        { id: 5, title: 'Cerrar Sesión', link: '/', action: logoutUser },
    ];

    return (
        <nav className=" bg-black  top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50 ">
            <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
                <div>
                    <img src={IconSpotify} alt="Logo Spotify" className="w-[50px]" />
                </div>
                <button onClick={toggleMenu} className="text-white ">
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

            <DesktopProfileMenu
                isOpen={isOpen}
                links={navbarProfilelinks}
                closeMenu={() => setIsOpen(false)}
                toggleMenu={toggleMenu}
                navigate={navigate}
            />
        </nav >
    );
};