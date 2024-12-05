import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assets } from '../../data/constants'
import Loader from '../../components/Loader/Index'
import PageNotFound from '../PageNotFound/Index'
import CheckIcon from "../../components/Icons/CheckIcon"
import { EmailVerificationWrapper, EmailVerificationContainer, EmailVerificationContent, EmailVerificationIcon, EmailVerificationTitle, EmailVerificationSubtitle, EmailVerificationFooter, Logo, LogoText, LoginButton } from './Styles'
import { Helmet } from 'react-helmet-async'

const EmailVerification = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isValidUrl, setIsValidUrl] = useState(false)
    const { userId, verificationToken } = useParams()

    useEffect(() => {
        const verifyEmail = async () => {
            try{
                const response = await fetch(`https://jcc-website.onrender.com/api/auth/users/${userId}/verify-email/${verificationToken}`, { 
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

        verifyEmail()
    }, [])

    return (
        <>
            <Helmet>
                <title>Email Verification - JCC</title>
                <meta name="description" content="Verify your email address to complete your registration with JCC." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {
                isLoading?<Loader />:isValidUrl?
                <EmailVerificationWrapper>
                    <EmailVerificationContainer>
                        <EmailVerificationContent>
                            <EmailVerificationIcon>
                                <CheckIcon />
                            </EmailVerificationIcon>
                            <EmailVerificationTitle>Your Email Has Been Verified!</EmailVerificationTitle>
                            <EmailVerificationSubtitle>We’re excited to have you on board! Your email is successfully verified, and you can now log in to your account.</EmailVerificationSubtitle>
                        </EmailVerificationContent>
                        <Link to="/login"><LoginButton type='button'>Login</LoginButton></Link>
                        <EmailVerificationFooter>
                            <Logo src={assets.logo} loading="lazy" fetchPriority='high'/>
                            <LogoText>Johari Career Consultancy</LogoText>
                        </EmailVerificationFooter>
                    </EmailVerificationContainer>
                </EmailVerificationWrapper>
                :<PageNotFound />
            }
        </>
    )
}

export default EmailVerification