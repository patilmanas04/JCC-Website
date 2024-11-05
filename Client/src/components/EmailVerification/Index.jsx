import React, { useEffect, useState } from 'react'
import GreenTick from '../../assets/green_tick.svg'
import ServerIcon from '../../assets/server_icon.svg'
import { EmailVerificationWrapper, EmailVerificationContainer, EmailVerificationContent, EmailVerificationIcon, EmailVerificationTitle, LoginButton } from './EmailVerificationElements'
import { Link, useParams } from 'react-router-dom'

const EmailVerification = () => {
    const [isValidUrl, setIsValidUrl] = useState(false)
    const { userId, verificationToken } = useParams()

    useEffect(() => {
        document.title = "JCC | Email Verification"

        const verifyEmail = async () => {
            try{
                const response = await fetch(`http://localhost:3000/api/auth/users/${userId}/verify-email/${verificationToken}`, { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                
                const data = await response.json()
                setIsValidUrl(data.success)
            }
            catch(error){
                console.log(error)
            }

        }

        verifyEmail()
    }, [])

    return (
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