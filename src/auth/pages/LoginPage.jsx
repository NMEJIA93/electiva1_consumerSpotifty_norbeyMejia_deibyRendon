import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();

    const onCanlled = (target) => {
        navigate('/', { replace: true });
    }
    const onLoginUser = (target) => {
        navigate('/userpage', { replace: true });
    }

    return (
        <>
            <div>
                <h1>login Usuario</h1>
            </div>
            <div>
                <button
                    onClick={onCanlled}
                >
                    Cancelar
                </button>
            </div>
            <div>
                <button
                    onClick={onLoginUser}
                >
                    Login
                </button>
            </div>
        </>
    )
}