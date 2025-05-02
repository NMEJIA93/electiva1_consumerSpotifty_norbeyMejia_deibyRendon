import Bacground from '../../assets/bgImage.png'

import { PublicNavbar } from '../components/PublicNavbar';
import { Hero } from '../components/Hero';


export const HomePage = () => {
    const bgImage = {
        backgroundImage: `url(${Bacground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div className="relative overflow-hidden min-h-screen bg-spotify-green">
                <div style={bgImage} className="relative z-10 min-h-screen">
                    <PublicNavbar/>
                    <Hero />
                </div>
            </div>
        </>
    );
};
