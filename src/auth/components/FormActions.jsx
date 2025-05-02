import { useNavigate } from 'react-router-dom';

export const FormActions = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/');
    };

    const handleSignIn = () => {
        navigate('/login'); 
    };

    return {
        handleCancel,
        handleSignIn,
    };
};