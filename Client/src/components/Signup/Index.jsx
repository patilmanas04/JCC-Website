import React, { useEffect, useRef, useState } from 'react'
import { SignupWrapper, SignupContainer, SignupContent, SignupTitle, SignupSubtitle, SignupForm, SignupField, Label, Input, SignupButton, SignupFooter, Span } from './SignupElements'
import { Link, useNavigate } from 'react-router-dom'
import AuthenticationAlertMessage from '../AuthenticationAlertMessage/Index'
import GoToHomeButton from '../GoToHomeButton/Index'

const Signup = () => {
    const [alert, setAlert] = useState({ success: false, message: '' })

    useEffect(() => {
        document.title = "JCC | Sign up"
    })

    const navigate = useNavigate()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        })

        const data = await response.json()
        setAlert(data)
    }

    return (
        <SignupWrapper>
            <SignupContainer>
                <SignupContent>
                    <GoToHomeButton />
                    <SignupTitle>Create a new account👋</SignupTitle>
                    <SignupSubtitle>It's quick and easy!
                    </SignupSubtitle>
                </SignupContent>
                <SignupForm>
                    <SignupField>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input id='firstName' type="text" placeholder="Enter your first name" ref={firstNameRef}/>
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input id='lastName' type="text" placeholder="Enter your last name" ref={lastNameRef}/>
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' type="email" placeholder="Enter your email" ref={emailRef}/>
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' name='password' type="password" placeholder="Password must be 8 characters long" ref={passwordRef}/>
                    </SignupField>
                    <SignupButton type='submit' onClick={handleSubmit}>Sign up</SignupButton>
                    {alert.message && <AuthenticationAlertMessage success={alert.success} message={alert.message} />}
                </SignupForm>
                <SignupFooter>
                    Already have an account? <Link to="/login"><Span>Login</Span></Link>
                </SignupFooter>
            </SignupContainer>
        </SignupWrapper>
    )
}

export default Signup