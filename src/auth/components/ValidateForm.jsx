import { useState } from 'react';

export const ValidateForm = () => {
    const [errors, setErrors] = useState({});

    const validate = (fieldName, value, formData) => {
        let error = '';

        if ((fieldName === 'firstName' || fieldName === 'lastName') && /\d/.test(value)) {
            error = 'No se permiten números en este campo.';
        }

        if (fieldName === 'confirmPassword' && value !== formData.password) {
            error = 'Las contraseñas no coinciden.';
        }

        setErrors((prev) => ({ ...prev, [fieldName]: error }));
    };

    const validateAll = (formData) => {
        const newErrors = {};

        if (/\d/.test(formData.firstName)) {
            newErrors.firstName = 'No se permiten números en este campo.';
        }
        if (/\d/.test(formData.lastName)) {
            newErrors.lastName = 'No se permiten números en este campo.';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden.';
        }

        setErrors(newErrors);
        return newErrors;
    };

    return {
        errors,
        validate,
        validateAll,
    };
};