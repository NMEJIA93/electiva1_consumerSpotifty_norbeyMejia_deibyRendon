export const initialFormState = {
    formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    errors: {},
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                formData: { ...state.formData, [action.field]: action.value },
                errors: { ...state.errors, [action.field]: action.error },
            };
        case 'SET_ERRORS':
            return { ...state, errors: action.errors };
        default:
            return state;
    }
};