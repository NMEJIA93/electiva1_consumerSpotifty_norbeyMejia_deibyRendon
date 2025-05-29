export const validateField = (fieldName, value) => {
    if (!value) {
        return `${fieldName} es obligatorio.`;
    }
    return '';
};

export const validateAllFields = (formData) => {
    const errors = {};
    for (const field in formData) {
        const error = validateField(field, formData[field]);
        if (error) {
            errors[field] = error;
        }
    }
    return errors;
};