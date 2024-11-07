import React, { useContext, useEffect, useRef, useState } from 'react'
import { LoginWrapper, LoginContainer, LoginContent, LoginTitle, LoginSubtitle, LoginForm, LoginField, Label, Input, LoginButton, LoginFooter, Span } from './LoginElements'
import { Link, useNavigate } from 'react-router-dom'
import GoToHomeButton from '../GoToHomeButton/Index'
import AlertBox from '../AlertBox/Index'
import InputPassword from '../FormControls/InputPassword/Index'
import userContext from '../../contexts/userContext'

const Login = () => {
    const [alert, setAlert] = useState({ success: false, message: '' })

    const context = useContext(userContext)
    const { setIsAdmin } = context

    useEffect(() => {
        document.title = "JCC | Log in"
    }, [])

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
                    <LoginButton type='submit'>Log in</LoginButton>
                    {alert.message && <AlertBox message={alert.message} severity={alert.success?"success":"error"}/>}
                </LoginForm>
                <LoginFooter>
                    Don't have an account? <Link to="/signup"><Span>Sign up for free!</Span></Link>
                </LoginFooter>
            </LoginContainer>
        </LoginWrapper>
    )
}

export default Login