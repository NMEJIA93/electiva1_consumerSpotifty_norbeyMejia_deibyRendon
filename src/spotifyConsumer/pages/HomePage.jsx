import React from 'react'

import { PublicNavbar } from '../components/PublicNavbar';
import { Hero } from '../components/Hero';

import Bacground from '../../assets/backgroundGreen.png'

export const HomePage = () => {
    const bgImage = {
        backgroundImage: `url(${Bacground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div className="relative overflow-hidden min-h-screen bg-green-700">
                <div style={bgImage} className="relative z-10 min-h-screen">
                    <PublicNavbar />
                    <Hero />
                </div>
            </div>
        </>
    );
};
