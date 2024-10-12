import React from 'react'
import { SignupWrapper, SignupContainer, SignupContent, SignupTitle, SignupSubtitle, SignupForm, SignupField, Label, Input, SignupButton, SignupFooter, Span } from './SignupElements'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <SignupWrapper>
            <SignupContainer>
                <SignupContent>
                    <SignupTitle>Create a new account👋</SignupTitle>
                    <SignupSubtitle>It's quick and easy!
                    </SignupSubtitle>
                </SignupContent>
                <SignupForm>
                    <SignupField>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' type="email" placeholder="Enter your email" />
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' name='password' type="password" placeholder="Password must be 8 characters long" />
                    </SignupField>
                    <SignupField>
                        <Label htmlFor='confirmPassword'>Confirm Password</Label>
                        <Input id='confirmPassword' name='confirmPassword' type="password" placeholder="Enter password again" />
                    </SignupField>
                    <SignupButton type='submit'>Sign up</SignupButton>
                </SignupForm>
                <SignupFooter>
                    Already have an account? <Link to="/login"><Span>Login</Span></Link>
                </SignupFooter>
            </SignupContainer>
        </SignupWrapper>
    )
}

export default Signup