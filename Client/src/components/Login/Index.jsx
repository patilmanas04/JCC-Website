import React from 'react'
import { LoginWrapper, LoginContainer, LoginContent, LoginTitle, LoginSubtitle, LoginForm, LoginField, Label, Input, LoginButton, LoginFooter, Span } from './LoginElements'
import { Link } from 'react-router-dom'

const Login = () => {
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
                        <Input id='email' type="email" placeholder="Enter your email" />
                    </LoginField>
                    <LoginField>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' name='password' type="password" placeholder="Enter your password" />
                    </LoginField>
                    <LoginButton type='submit'>Log in</LoginButton>
                </LoginForm>
                <LoginFooter>
                    Don't have an account? <Link to="/signup"><Span>Sign up for free!</Span></Link>
                </LoginFooter>
            </LoginContainer>
        </LoginWrapper>
    )
}

export default Login