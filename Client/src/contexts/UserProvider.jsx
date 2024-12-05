import { useState } from "react";
import userContext from "./userContext";

const UserProvider = (props) => {
    const [userCredentials, setUserCredentials] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const [currentUserCredentials, setCurrentUserCredentials] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const [isAdmin, setIsAdmin] = useState({
        status: false,
        checked: false
    })

    const [adminDetails, setAdminDetails] = useState({
        name: '',
        email: ''
    })

    const [selectedUserId, setSelectedUserId] = useState('')

    const [allUsersDetails, setAllUsersDetails] = useState([])

    const getAdminAndAllUsersDetails = async (setIsLoading, setIsValidUrl) => {
        try{
            const response = await fetch('https://jcc-website.onrender.com/api/users/getallusers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken')
                }
            })

            const data = await response.json()
            
            setIsLoading(false)

            setIsValidUrl(data.success)

            if(data.success){
                setAdminDetails({
                    name: data.adminDetails.firstName + ' ' + data.adminDetails.lastName,
                    email: data.adminDetails.email
                })

                setAllUsersDetails(data.allUsersDetails)
            }
            else{
                return false
            }
        }
        catch(error){
            console.error(error)
        }
    }

    const deleteUser = async (isDeleteModalOpen, setIsDeleteModalOpen) => {
        try{
            const response = await fetch('https://jcc-website.onrender.com/api/auth/deleteuser', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken')
                },
                body: JSON.stringify({userId: selectedUserId})
            })

            const data = await response.json()

            if(data.success){
                const updatedUsersList = allUsersDetails.filter(user => user._id !== selectedUserId)
                setAllUsersDetails(updatedUsersList)
                setIsDeleteModalOpen(!isDeleteModalOpen)
            }
        }
        catch(error){
            console.error(error)
        }
    }

    const getUserDetails = async (setIsLoading, setIsValidUrl) => {
        try{
            const response = await fetch('https://jcc-website.onrender.com/api/auth/getuser', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken')
                }
            })

            const data = await response.json()

            setIsLoading(false)

            setIsValidUrl(data.success)

            if(data.success){
                setUserCredentials(data.userDetails)
                setCurrentUserCredentials(data.userDetails)
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

    const updateUserDetails = async (credentials, setAlert) => {
        try{
            const response = await fetch('https://jcc-website.onrender.com/api/auth/updateuser', {
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
            setCurrentUserCredentials(credentials)
            if(isAdmin.status){
                setAdminDetails({
                    name: credentials.firstName + ' ' + credentials.lastName,
                    email: adminDetails.email
                })
            }
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
        <userContext.Provider value={{ getUserDetails, updateUserDetails, userCredentials, setUserCredentials, currentUserCredentials, isAdmin, setIsAdmin, adminDetails, selectedUserId, setSelectedUserId, allUsersDetails, getAdminAndAllUsersDetails, deleteUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider