import Bacground from '../../assets/bgImage.png';

import { PublicNavbar } from '../components/PublicNavbar';
import { PrivateNavbar } from '../components/PrivateNavbar';
import { Hero } from '../components/Hero';
import { useContext } from 'react';
import { UserContext } from '../../auth/context/UserContext';

export const HomePage = () => {
  const { userState } = useContext(UserContext); // Obtén el estado del usuario

  return (
    <>
      <div className="bg-spotify-green relative overflow-hidden min-h-screen">
        <div
          className="relative z-10 min-h-screen bg-center bg-no-repeat sm:bg-cover md:bg-cover"
          style={{ backgroundImage: `url(${Bacground})` }}
        >
          {/* Renderiza PublicNavbar o PrivateNavbar según el estado del usuario */}
          {userState.logged ? <PrivateNavbar /> : <PublicNavbar />}
          <Hero />
        </div>
      </div>
    </>
  );
};