import React from 'react';
import { RegisterForm } from '../components/RegisterForm';
import Bacground from '../../assets/backgroundGreen.png'

export const RegisterPage = () => {
    return (
        <div
            className="relative overflow-hidden min-h-screen bg-green-700 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${Bacground})` }}
        >
            <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 min-h-[400px] sm:min-h-[500px]">
                <RegisterForm />
            </div>
        </div>
    );
};