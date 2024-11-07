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

    const getUserDetails = async (setIsLoading) => {
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
                setUserCredentials(data.userDetails)
                setCurrentUserCredentials(data.userDetails)
                document.title = 'JCC | Profile'
                setIsLoading(false)
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
            setCurrentUserCredentials(credentials)
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
        <userContext.Provider value={{getUserDetails, updateUserDetails, userCredentials, setUserCredentials, currentUserCredentials}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider