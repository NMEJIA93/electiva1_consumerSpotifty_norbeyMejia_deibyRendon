import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    
    const navigate = useNavigate();

    const onLoginUser = (target) => {

        navigate('/', { replace: true });

    }

    return (
        <>
            <div>
                <h1>login</h1>
                <button
                    onClick={onLoginUser}>ir a home</button>
            </div>
        </>
    )
}