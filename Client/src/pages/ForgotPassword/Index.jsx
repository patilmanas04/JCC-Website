import React, { useRef, useEffect, useState } from 'react'
import { assets } from '../../data/constants'
import AlertBox from '../../components/AlertBox/Index'
import { useNavigate, Link } from 'react-router-dom'
import { ForgotPasswordWrapper, ForgotPasswordContainer, ForgotPasswordContent, ReturnToLoginButton, LeftArrowIconWrapper, ForgotPasswordTitle, ForgotPasswordSubtitle, ForgotPasswordForm, ForgotPasswordField, Label, Input, ForgotPasswordButton, ForgotPasswordFooter, Span } from './Styles'
import { Helmet } from 'react-helmet-async'
import LeftArrowIcon from '../../components/Icons/LeftArrowIcon'

const ForgotPassword = () => {
	const emailRef = useRef()
	const navigate = useNavigate()

	const [alert, setAlert] = useState({ success: false, message: '' })

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
		<>
			<Helmet>
				<title>Reset Your Password - JCC</title>
				<meta name="description" content="Forgot your password? Enter your email address to securely reset it and regain access to your JCC account." />
				<meta name="keywords" content="reset password JCC, JCC account recovery, forgot your password?, password reset page, secure JCC login recovery" />
                <link rel="canonical" href="https://joharicareerconsultancy.com/forgot-password" />
			</Helmet>
			<ForgotPasswordWrapper>
				<ForgotPasswordContainer>
					<ForgotPasswordContent>
						<ReturnToLoginButton onClick={() => navigate('/login')}><LeftArrowIconWrapper><LeftArrowIcon/></LeftArrowIconWrapper>Return to login</ReturnToLoginButton>
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
		</>
	)
}

export default ForgotPassword