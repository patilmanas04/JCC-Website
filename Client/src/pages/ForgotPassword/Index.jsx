import React, { useRef, useEffect, useState } from 'react'
import { assets } from '../../data/constants'
import AlertBox from '../../components/AlertBox/Index'
import { useNavigate, Link } from 'react-router-dom'
import { ForgotPasswordWrapper, ForgotPasswordContainer, ForgotPasswordContent, ReturnToLoginButton, LeftArrowIcon, ForgotPasswordTitle, ForgotPasswordSubtitle, ForgotPasswordForm, ForgotPasswordField, Label, Input, ForgotPasswordButton, ForgotPasswordFooter, Span } from './Styles'

const ForgotPassword = () => {
	const emailRef = useRef()
	const navigate = useNavigate()

	const [alert, setAlert] = useState({ success: false, message: '' })

	useEffect(() => {
        document.title = "JCC | Forgot Password"
    }, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		
		const email = e.target.email.value
		
		const response = await fetch('https://jcc-website.onrender.com/api/auth/forgotpassword', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		})

		const data = await response.json()

		setAlert(data)
	}

	return (
		<ForgotPasswordWrapper>
            <ForgotPasswordContainer>
                <ForgotPasswordContent>
					<ReturnToLoginButton onClick={() => navigate('/login')}><LeftArrowIcon fetchPriority='high' loading="lazy" src={assets.left_arrow} />Return to login</ReturnToLoginButton>
                    <ForgotPasswordTitle>Forgot Your Password?</ForgotPasswordTitle>
                    <ForgotPasswordSubtitle>Enter your registered email address below, and we'll send you a link to reset your password.
                    </ForgotPasswordSubtitle>
                </ForgotPasswordContent>
                <ForgotPasswordForm onSubmit={handleSubmit}>
                    <ForgotPasswordField>
                        <Label htmlFor='email'>Registered Email Address</Label>
                        <Input id='email' name='email' type="email" placeholder="Enter your email address" ref={emailRef} required/>
                    </ForgotPasswordField>
                    <ForgotPasswordButton type='submit'>Send Reset Link</ForgotPasswordButton>
                    {alert.message && <AlertBox message={alert.message} severity={alert.success?"success":"error"}/>}
                </ForgotPasswordForm>
                <ForgotPasswordFooter>
					Remembered your password? <Link to="/login"><Span>Login instead.</Span></Link>
                </ForgotPasswordFooter>
            </ForgotPasswordContainer>
        </ForgotPasswordWrapper>
	)
}

export default ForgotPassword