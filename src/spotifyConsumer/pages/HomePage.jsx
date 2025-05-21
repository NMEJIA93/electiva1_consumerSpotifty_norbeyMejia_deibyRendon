import Bacground from '../../assets/bgImage.png';

import { PublicNavbar } from '../components/PublicNavbar';
import { PrivateNavbar } from '../components/PrivateNavbar';
import { Hero } from '../components/Hero'
import { useContext } from 'react';
import { UserProfileContext } from '../contexts/UserProfileContext'



export const HomePage = () => {
    const { profileState } = useContext(UserProfileContext);
    const { profile, errorMessage: error } = profileState;
    console.log('Estado global del perfil:', profileState);
    console.log('Perfil del usuario:', profile);

  return (
    <>
      <div className="bg-spotify-green relative overflow-hidden min-h-screen">
        <div
          className="relative z-10 min-h-screen bg-center bg-no-repeat sm:bg-cover md:bg-cover"
          style={{ backgroundImage: `url(${Bacground})` }}
        >
          <PrivateNavbar />
          <Hero />
        </div>
      </div>
    </>
  );
};