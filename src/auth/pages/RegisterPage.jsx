import React from 'react';
import { RegisterForm } from '../components/RegisterForm';
import { FormActions } from '../components/FormActions';

export const RegisterPage = () => {
    const { handleCancel } = FormActions();

    return (
        <div className="relative overflow-hidden min-h-screen bg-green-700">
                <RegisterForm />
                <RegisterForm onCancel={handleCancel} />
        </div>
    );
};