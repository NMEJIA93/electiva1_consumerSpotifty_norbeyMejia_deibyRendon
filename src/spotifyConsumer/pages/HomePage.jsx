import React from 'react'

import { Navbar } from '../components/Navbar';
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
            <div className="relative overflow-hidden min-h-screen">
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                <div style={bgImage} className="relative z-10 min-h-screen">
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </>
    );
};
