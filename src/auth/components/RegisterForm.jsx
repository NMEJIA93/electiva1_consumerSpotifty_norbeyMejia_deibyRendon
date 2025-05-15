import React, { useReducer } from 'react';
import { useAuth } from '../hooks/useAuth';
import { formReducer, initialFormState } from '../reducers/formReducer';
import { validateField, validateAllFields } from '../utils/formValidation';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export const RegisterForm = () => {
    const { register, loading, error } = useAuth();
    const [state, dispatch] = useReducer(formReducer, initialFormState);
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        const fieldError = validateField(name, value, state.formData);
        dispatch({ type: 'SET_FIELD', field: name, value, error: fieldError });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateAllFields(state.formData);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await register(state.formData.email, state.formData.password);
                alert('Usuario registrado exitosamente');
                navigate('/login');
            } catch (err) {
                console.error(err);
            }
        } else {
            dispatch({ type: 'SET_ERRORS', errors: validationErrors });
        }
    };

    const handleCancel = () => {
        navigate('/'); 
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Crear una cuenta</h1>
                    <p className="text-gray-600 mt-2">Complete sus datos para comenzar</p>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {/* Nombre y Apellido */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={state.formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Andres"
                                />
                                {state.errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{state.errors.firstName}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Apellido
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={state.formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Sanchez"
                                />
                                {state.errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{state.errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        {/* Correo Electrónico */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={state.formData.email}
                                onChange={handleChange}
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="andresdocente@example.com"
                            />
                            {state.errors.email && (
                                <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
                            )}
                        </div>

                        {/* Contraseña */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={state.formData.password}
                                onChange={handleChange}
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="••••••••"
                            />
                            {state.errors.password && (
                                <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>
                            )}
                        </div>

                        {/* Confirmar Contraseña */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirmar Contraseña
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={state.formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="••••••••"
                            />
                            {state.errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{state.errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Botón de Registro */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={loading}
                            >
                                Crear cuenta
                            </button>
                        </div>
                        {/* Cancel Button */}
                        <div>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>
                {/* Sign In Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        ¿Ya tienes una cuenta?{' '}
                        <button
                            onClick={() => navigate('/login')}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};