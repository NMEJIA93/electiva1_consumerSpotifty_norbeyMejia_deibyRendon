import Bacground from '../../assets/bgImage.png'

import { PublicNavbar } from '../components/PublicNavbar';
import { Hero } from '../components/Hero';


export const HomePage = () => {
    return (
        <>
            <div className=" bg-spotify-green relative overflow-hidden min-h-screen">
                <div
                    className="relative z-10 min-h-screen bg-center bg-no-repeat sm:bg-cover md:bg-cover"
                    style={{ backgroundImage: `url(${Bacground})` }}
                >
                    <PublicNavbar />
                    <Hero />
                </div>
            </div>
        </>
    );
};