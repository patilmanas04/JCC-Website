export const signupFormValidator = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            success: false,
            message: 'Invalid email address'
        }
    }

    if(password.length < 8){
        return {
            success: false,
            message: 'Password must be at least 8 characters long'
        }
    }

    return {
        success: true,
        message: ''
    }
}

export const updateProfileFormValidator = (firstName, lastName) => {
    if(firstName.length < 1){
        return {
            success: false,
            message: 'First name is required'
        }
    }

    if(lastName.length < 1){
        return {
            success: false,
            message: 'Last name is required'
        }
    }

    return {
        success: true,
        message: ''
    }
}

export const resetPasswordFormValidator = (newPassword, confirmPassword) => {
    if(newPassword.length < 8){
        return {
            success: false,
            message: 'Password must be at least 8 characters long'
        }
    }

    if(newPassword !== confirmPassword){
        return {
            success: false,
            message: 'Passwords do not match'
        }
    }

    return {
        success: true,
        message: ''
    }
}