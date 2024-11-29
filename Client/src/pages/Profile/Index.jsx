import React, { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../data/constants'
import GoToHomeButton from '../../components/GoToHomeButton/Index'
import Loader from '../../components/Loader/Index'
import AlertBox from '../../components/AlertBox/Index'
import userContext from '../../contexts/userContext'
import { updateProfileFormValidator } from '../../utils/formValidators'
import { ProfileWrapper, ProfileContainer, ProfileTitle, Span, ProfileOverview, ProfileIcon, ProfileDetails, ProfileName, ProfileEmail, ProfileContent, ProfileItem, ProfileLabel, ProfileValue, ProfileActions, UpdateProfileButton, LogoutButton } from './Styles'
import PageNotFound from '../PageNotFound/Index'

const Profile = () => {
    const navigate = useNavigate()
    const context = useContext(userContext)
    const { getUserDetails, updateUserDetails, userCredentials, setUserCredentials, currentUserCredentials, setIsAdmin } = context

    const [isLoading, setIsLoading] = useState(true)
    const [isValidUrl, setIsValidUrl] = useState(false)

    const [alert, setAlert] = useState({
        success: false,
        message: ''
    })

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if(!token){
            navigate('/login')
        }

        if (!userCredentials.firstName && !userCredentials.lastName) {
            getUserDetails(setIsLoading, setIsValidUrl)
        } else {
            setIsLoading(false)
            setIsValidUrl(true)
        }
    }, [])

    const onChange = (e) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        setUserCredentials({
            firstName: '',
            lastName: '',
            email: ''
        })
        setIsAdmin({
            status: false,
            checked: false
        })
        navigate('/')
    }

    const handleUpdate = async (e) => {
        const formValidationResult = updateProfileFormValidator(userCredentials.firstName, userCredentials.lastName)

        if(!formValidationResult.success){
            setAlert(formValidationResult)
            return
        }

        if(userCredentials.firstName === currentUserCredentials.firstName && userCredentials.lastName === currentUserCredentials.lastName){
            setAlert({
                success: false,
                message: 'No changes made to update'
            })
            return
        }

        updateUserDetails(userCredentials, setAlert)
    }

    return (
        isLoading?<Loader />:
        isValidUrl?
        <ProfileWrapper>
            <GoToHomeButton />
            <ProfileContainer>
                <ProfileTitle>User <Span>Profile</Span></ProfileTitle>
                <ProfileOverview>
                    <ProfileIcon src={assets.profile_icon} alt="profile_icon"/>
                    <ProfileDetails>
                        <ProfileName>{userCredentials.firstName} {userCredentials.lastName}</ProfileName>
                        <ProfileEmail>{userCredentials.email}</ProfileEmail>
                    </ProfileDetails>
                </ProfileOverview>
                <ProfileContent>
                    <ProfileItem>
                        <ProfileLabel htmlFor='firstName'>First Name</ProfileLabel>
                        <ProfileValue type='text' name='firstName' id='firstName' value={userCredentials.firstName} onChange={onChange}/>
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileLabel htmlFor='lastName'>Last Name</ProfileLabel>
                        <ProfileValue type='text' name='lastName' id='lastName' value={userCredentials.lastName} onChange={onChange}/>
                    </ProfileItem>
                </ProfileContent>
                {
                    alert.message && <AlertBox severity={alert.success?'success':'error'} message={alert.message} />
                }
                <ProfileActions>
                    <UpdateProfileButton type='button' onClick={handleUpdate}>Update Profile</UpdateProfileButton>
                    <LogoutButton type='button' onClick={handleLogout}>Logout</LogoutButton>
                </ProfileActions>
            </ProfileContainer>
        </ProfileWrapper>:<PageNotFound />
    )
}

export default Profile