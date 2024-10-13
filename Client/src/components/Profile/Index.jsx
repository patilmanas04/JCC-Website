import React, { useState, useRef, useEffect } from 'react'
import ProfileIconSvg from '../../assets/profile_icon.svg'
import { ProfileWrapper, ProfileContainer, ProfileTitle, Span, ProfileOverview, ProfileIcon, ProfileDetails, ProfileName, ProfileEmail, ProfileContent, ProfileItem, ProfileLabel, ProfileValue, ProfileActions, UpdateProfileButton, LogoutButton } from './ProfileElements'
import { useNavigate } from 'react-router-dom'
import AuthenticationAlertMessage from '../AuthenticationAlertMessage/Index'

const Profile = () => {
    const navigate = useNavigate()

    const [alert, setAlert] = useState({
        success: false,
        message: ''
    })

    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    useEffect(() => {

        const token = localStorage.getItem('authToken')
        if(!token){
            navigate('/login')
        }

        const getUserDetails = async () => {
            try{
                const response = await fetch('http://localhost:3000/api/auth/getuser', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Auth-Token': localStorage.getItem('authToken')
                    }
                })

                const data = await response.json()

                if(data.success){
                    setCredentials(data.userDetails)
                    document.title = 'JCC | Profile'
                }
                else{
                    navigate('/login')
                }
            }
            catch(error){
                console.log(error)
            }
        }

        getUserDetails()
    }, [])

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        navigate('/')
    }

    const handleUpdate = async () => {
        try{
            const response = await fetch('http://localhost:3000/api/auth/updateuser', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken')
                },
                body: JSON.stringify({
                    firstName: credentials.firstName,
                    lastName: credentials.lastName
                })
            })

            const data = await response.json()
            setAlert({
                success: data.success,
                message: data.message
            })
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <ProfileWrapper>
            <ProfileContainer>
                <ProfileTitle>User <Span>Profile</Span></ProfileTitle>
                <ProfileOverview>
                    <ProfileIcon src={ProfileIconSvg} alt="profile_icon"/>
                    <ProfileDetails>
                        <ProfileName>{credentials.firstName} {credentials.lastName}</ProfileName>
                        <ProfileEmail>{credentials.email}</ProfileEmail>
                    </ProfileDetails>
                </ProfileOverview>
                <ProfileContent>
                    <ProfileItem>
                        <ProfileLabel htmlFor='firstName'>First Name</ProfileLabel>
                        <ProfileValue type='text' name='firstName' id='firstName' value={credentials.firstName} onChange={onChange}/>
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileLabel htmlFor='lastName'>Last Name</ProfileLabel>
                        <ProfileValue type='text' name='lastName' id='lastName' value={credentials.lastName} onChange={onChange}/>
                    </ProfileItem>
                </ProfileContent>
                {
                    alert.message && <AuthenticationAlertMessage success={alert.success} message={alert.message}/>
                }
                <ProfileActions>
                    <UpdateProfileButton type='button' onClick={handleUpdate}>Update Profile</UpdateProfileButton>
                    <LogoutButton type='button' onClick={handleLogout}>Logout</LogoutButton>
                </ProfileActions>
            </ProfileContainer>
        </ProfileWrapper>
    )
}

export default Profile