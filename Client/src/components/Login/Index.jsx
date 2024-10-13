import React, { useEffect, useRef, useState } from 'react'
import { LoginWrapper, LoginContainer, LoginContent, LoginTitle, LoginSubtitle, LoginForm, LoginField, Label, Input, LoginButton, LoginFooter, Span } from './LoginElements'
import { Link, useNavigate } from 'react-router-dom'
import AuthenticationAlertMessage from '../AuthenticationAlertMessage/Index'

const Login = () => {
    const [alert, setAlert] = useState({ success: false, message: '', authToken: '' })

    useEffect(() => {
        document.title = "JCC | Log in"
    }, [])

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()

        if(data.success){
            localStorage.setItem('authToken', data.authToken)
            navigate('/')
        }

        setAlert(data)
    }

    return (
        <LoginWrapper>
            <LoginContainer>
                <LoginContent>
                    <LoginTitle>WELCOME BACK 👋</LoginTitle>
                    <LoginSubtitle>Welcome back! Please enter your details.
                    </LoginSubtitle>
                </LoginContent>
                <LoginForm>
                    <LoginField>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' type="email" placeholder="Enter your email" ref={emailRef}/>
                    </LoginField>
                    <LoginField>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' name='password' type="password" placeholder="Enter your password" ref={passwordRef}/>
                    </LoginField>
                    <LoginButton type='submit' onClick={handleSubmit}>Log in</LoginButton>
                    {alert.message && <AuthenticationAlertMessage success={alert.success} message={alert.message} authToken={alert.authToken} />}
                </LoginForm>
                <LoginFooter>
                    Don't have an account? <Link to="/signup"><Span>Sign up for free!</Span></Link>
                </LoginFooter>
            </LoginContainer>
        </LoginWrapper>
    )
}

export default Login