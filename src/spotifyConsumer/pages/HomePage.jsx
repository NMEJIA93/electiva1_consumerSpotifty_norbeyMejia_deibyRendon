import React from 'react'

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

import Fondo from '../../assets/FondoMusica.jpg'

export const HomePage = () => {

    const bgImagen = {
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        position: 'relative'
    }

    return (
        <>
            <div style ={bgImagen} className="overflow-hidden min-h-screen">
                <div>
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </>
    )
}

