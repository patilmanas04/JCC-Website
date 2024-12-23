import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoToHomeButton from '../../components/GoToHomeButton/Index'
import AlertBox from '../../components/AlertBox/Index'
import InputPassword from '../../components/FormControls/InputPassword/Index'
import userContext from '../../contexts/userContext'
import { LoginWrapper, LoginContainer, LoginContent, LoginTitle, LoginSubtitle, LoginForm, LoginField, Label, Input, LoginButton, LoginFooter, Span } from './Styles'
import { Helmet } from 'react-helmet-async'

const Login = () => {
    const [alert, setAlert] = useState({ success: false, message: '' })

    const context = useContext(userContext)
    const { setIsAdmin } = context

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = passwordRef.current.value

        const response = await fetch('https://jcc-website.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()

        if(data.success){
            localStorage.setItem('authToken', data.authToken)
            if(data.isAdmin){
                setIsAdmin({
                    status: true,
                    checked: true
                })
                navigate('/admin-dashboard')
            }
            else{
                setIsAdmin({
                    status: false,
                    checked: true
                })
                navigate('/')
            }
        }

        setAlert(data)
    }

    return (
        <>
            <Helmet>
                <title>Login to JCC - Access Your Dashboard</title>
                <meta name="description" content="Log in to your JCC account to access your personalized dashboard and schedule calls. Don’t have an account? Sign up now!" />
                <meta name="keywords" content="JCC login page, access counseling dashboard, login to JCC account, secure account login, career counseling login" />
                <link rel="canonical" href="https://joharicareerconsultancy.com/login" />
            </Helmet>
            <LoginWrapper>
                <LoginContainer>
                    <LoginContent>
                        <GoToHomeButton />
                        <LoginTitle>WELCOME BACK 👋</LoginTitle>
                        <LoginSubtitle>Welcome back! Please enter your details.
                        </LoginSubtitle>
                    </LoginContent>
                    <LoginForm onSubmit={handleSubmit}>
                        <LoginField>
                            <Label htmlFor='email'>Email</Label>
                            <Input id='email' type="email" placeholder="Enter your email" ref={emailRef} required/>
                        </LoginField>
                        <LoginField>
                            <Label htmlFor='password'>Password</Label>
                            <InputPassword placeholder="Enter your password" reference={passwordRef}/>
                        </LoginField>
                        <LoginField style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}>
                            <Link to="/forgot-password"><Span>Forgot your password?</Span></Link>
                        </LoginField>
                        <LoginButton type='submit'>Log in</LoginButton>
                        {alert.message && <AlertBox message={alert.message} severity={alert.success?"success":"error"}/>}
                    </LoginForm>
                    <LoginFooter>
                        Don't have an account? <Link to="/signup"><Span>Sign up for free!</Span></Link>
                    </LoginFooter>
                </LoginContainer>
            </LoginWrapper>
        </>
    )
}

export default Login