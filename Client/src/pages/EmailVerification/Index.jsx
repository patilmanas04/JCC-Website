import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assets } from '../../data/constants'
import Loader from '../../components/Loader/Index'
import PageNotFound from '../PageNotFound/Index'
import { EmailVerificationWrapper, EmailVerificationContainer, EmailVerificationContent, EmailVerificationIcon, EmailVerificationTitle, LoginButton } from './Styles'

const EmailVerification = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isValidUrl, setIsValidUrl] = useState(false)
    const { userId, verificationToken } = useParams()

    useEffect(() => {
        document.title = "JCC | Email Verification"

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
        isLoading?<Loader />:isValidUrl?
        <EmailVerificationWrapper>
            <EmailVerificationContainer>
                <EmailVerificationContent>
                    <EmailVerificationIcon src={isValidUrl?assets.green_tick:assets.server_icon} />
                    <EmailVerificationTitle>Email Verified Successfully!</EmailVerificationTitle>
                </EmailVerificationContent>
                <Link to='/login'><LoginButton type="button">Log in</LoginButton></Link>
            </EmailVerificationContainer>
        </EmailVerificationWrapper>:<PageNotFound />
    )
}

export default EmailVerification