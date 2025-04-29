import { useNavigate } from 'react-router-dom';
import IconSpotify from '../../assets/spotify_icon.png'


const navbarRedes = [
    {
        id: 1,
        title: 'Login',
        link: '/login',
        //icon: 'bi bi-instagram'
    },
    {
        id: 2,
        title: 'register',
        link: '/',
        //icon: 'bi bi-linkedin'
    },

]


export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className='bg-blue-300 fixed top-0 left-0 w-full bg-opacity-5 backdrop-blur-md z-50'>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
                <div>
                    <img src={IconSpotify} alt="Logo Spotify" className='w-[100px]' />
                </div>
                {/*Redes sociales */}
                <div className='hidden md:block'>
                    <ul className='flex space-x-4'>
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    rel='noopener noreferrer'
                                    className='inline-block text-white sm:text-xl text-sm hover:text-gray-300 transition-transform hover:scale-105'
                                    target='_blank'
                                    href={link.link}
                                    onClick={() => navigate(link.link, { replace: true })}
                                >
                                    {link.title}
                                    <i
                                        className={`${link.icon} sm:text-xl text-lg text-white hover:text-gray-300 transition-transform hover:scale-105`}>
                                    </i>

                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}


