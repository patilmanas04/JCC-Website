import React, { useRef, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AlertBox from '../../components/AlertBox/Index'
import InputPassword from '../../components/FormControls/InputPassword/Index'
import { ResetPasswordWrapper, ResetPasswordContainer, ResetPasswordContent, ResetPasswordTitle, ResetPasswordSubtitle, ResetPasswordForm, ResetPasswordField, Label, Input, ResetPasswordButton, ResetPasswordFooter, Span } from './Styles'
import { resetPasswordFormValidator } from '../../utils/formValidators'
import Loader from '../../components/Loader/Index'
import PageNotFound from '../PageNotFound/Index'

const ResetPassword = () => {
    const { userId, resetToken } = useParams()

    const newPasswordRef = useRef()
    const confirmPasswordRef = useRef()

    const [isLoading, setIsLoading] = useState(true)
    const [isValidUrl, setIsValidUrl] = useState(false)
    const [alert, setAlert] = useState({ success: false, message: '' })
    
    useEffect(() => {
        document.title = "JCC | Reset Password"

        const verifyResetToken = async () => {
            try{
                const response = await fetch(`http://localhost:3000/api/auth/users/${userId}/reset-password/${resetToken}`, { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                
                const data = await response.json()

                setIsValidUrl(data.success)
                setIsLoading(false)
            }
            catch(error){
                console.log(error)
            }
        }

        verifyResetToken()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newPassword = newPasswordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value

        const validationResult = resetPasswordFormValidator(newPassword, confirmPassword)

        if(!validationResult.success){
            return setAlert(validationResult)
        }
        
        const response = await fetch(`http://localhost:3000/api/auth/updatepassword`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                password: newPassword,
                resetToken
            })
        })

        const data = await response.json()

        setAlert(data)
    }

    return (
        isLoading?<Loader />:isValidUrl?
        <ResetPasswordWrapper>
            <ResetPasswordContainer>
                <ResetPasswordContent>
                    <ResetPasswordTitle>Create a New Password</ResetPasswordTitle>
                    <ResetPasswordSubtitle>Make sure your password is strong and secure.
                    </ResetPasswordSubtitle>
                </ResetPasswordContent>
                <ResetPasswordForm onSubmit={handleSubmit}>
                    <ResetPasswordField>
                        <Label htmlFor='newPassword'>New Password</Label>
                        <InputPassword placeholder="Enter your new password" reference={newPasswordRef}/>
                    </ResetPasswordField>
                    <ResetPasswordField>
                        <Label htmlFor='newPassword'>Confirm Password</Label>
                        <InputPassword placeholder="Re-enter your new password." reference={confirmPasswordRef}/>
                    </ResetPasswordField>
                    <ResetPasswordButton type='submit'>Reset Password</ResetPasswordButton>
                    {alert.message && <AlertBox message={alert.message} severity={alert.success?"success":"error"}/>}
                </ResetPasswordForm>
                <ResetPasswordFooter>
                    Return to <Link to="/login"><Span>Login.</Span></Link>
                </ResetPasswordFooter>
            </ResetPasswordContainer>
        </ResetPasswordWrapper>:<PageNotFound />
    )
}

export default ResetPassword