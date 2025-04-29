import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const HomePage = () => {

    const navigate = useNavigate();

    const onLoginUser = (target) => {

        navigate('/login', { replace: true });

    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <h1 className="text-3xl font-bold underline text-blue-500">
                    Hello world!
                </h1>
                <i className="bi bi-0-circle"></i>

                <div>
                    <h1>login</h1>
                    <button
                        onClick={onLoginUser}>ir a login</button>
                </div>
            </div>
        </>

    )
}

