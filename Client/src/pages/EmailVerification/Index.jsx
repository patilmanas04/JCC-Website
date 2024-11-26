import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import GreenTick from '../../assets/green_tick.svg'
import ServerIcon from '../../assets/server_icon.svg'
import Loader from '../../components/Loader/Index'
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
        isLoading?<Loader />:
        <EmailVerificationWrapper>
            <EmailVerificationContainer>
                <EmailVerificationContent>
                    <EmailVerificationIcon src={isValidUrl?GreenTick:ServerIcon} />
                    <EmailVerificationTitle>{isValidUrl?"Email Verified Successfully!":"404 Not Found"}</EmailVerificationTitle>
                </EmailVerificationContent>
                {
                    isValidUrl?<Link to='/login'><LoginButton type="button">Log in</LoginButton></Link>:""
                }
                
            </EmailVerificationContainer>
        </EmailVerificationWrapper>
    )
}

export default EmailVerification