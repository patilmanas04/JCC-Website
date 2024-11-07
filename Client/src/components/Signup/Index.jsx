import React, { useEffect, useRef, useState } from 'react'
import { SignupWrapper, SignupContainer, SignupContent, SignupTitle, SignupSubtitle, SignupForm, SignupField, Label, Input, SignupButton, SignupFooter, Span } from './SignupElements'
import { Link, useNavigate } from 'react-router-dom'
import GoToHomeButton from '../GoToHomeButton/Index'
import { signupFormValidator } from '../../utils/formValidators'
import AlertBox from '../AlertBox/Index'

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
    const formControls = [firstNameRef, lastNameRef, emailRef, passwordRef]

    const handleSubmit = async (e) => {
        e.preventDefault()

        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const password = e.target.password.value

        const formValidationResult = signupFormValidator(email, password)

        if (!formValidationResult.success) {
            formControls.forEach(control => {
                control.current.style.border = '1px solid #ff0000'
            })
            return setAlert(formValidationResult)
        }

        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        })

        const data = await response.json()
        if(data.success){
            formControls.forEach(control => {
                control.current.style.border = '1px solid #D9D9D9'
            })
        }
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
                <SignupForm onSubmit={handleSubmit}>
                    <SignupField>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input id='firstName' name='firstName' type="text" placeholder="Enter your first name" ref={firstNameRef} required/>
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input id='lastName' name='lastName' type="text" placeholder="Enter your last name" ref={lastNameRef} required/>
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' name='email' type="email" placeholder="Enter your email" ref={emailRef} required/>
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' name='password' type="password" placeholder="Password must be 8 characters long" ref={passwordRef} required/>
                    </SignupField>
                    <SignupButton type='submit'>Sign up</SignupButton>
                    {alert.message && <AlertBox severity={alert.success?"success":"error"} message={alert.message} />}
                </SignupForm>
                <SignupFooter>
                    Already have an account? <Link to="/login"><Span>Login</Span></Link>
                </SignupFooter>
            </SignupContainer>
        </SignupWrapper>
    )
}

export default Signup