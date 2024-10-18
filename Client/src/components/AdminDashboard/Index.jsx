import React, { useEffect, useState } from 'react'
import { AdminDashboardWrapper, AdminDashboardContainer, AdminDashboardHeader, AdminDashboardTitle, AdminDashboardSubtitle, AdminDetails, AdminName, AdminEmail, LogoutButton, AllUsersDetails, UserDetails, UserName, UserEmail, AccountCreationDate } from './AdminDashboardElements'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const [adminDetails, setAdminDetails] = useState({
        name: '',
        email: ''
    })

    const [allUsersDetails, setAllUsersDetails] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const fetchAdminAndUsersDetails = async () => {
            try{
                const response = await fetch('http://localhost:3000/api/users/getallusers', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Auth-Token': localStorage.getItem('authToken')
                    }
                })

                const data = await response.json()

                if(data.success){
                    setAdminDetails({
                        name: data.adminDetails.firstName + ' ' + data.adminDetails.lastName,
                        email: data.adminDetails.email
                    })

                    setAllUsersDetails(data.allUsersDetails) 
                }
                else{
                    navigate('/')
                }
            }
            catch(error){
                console.error(error)
            }
        }

        fetchAdminAndUsersDetails()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        navigate('/')
    }

    return (
        <AdminDashboardWrapper>
            <AdminDashboardContainer>
                <AdminDashboardHeader>
                    <AdminDashboardTitle>Admin Dashboard</AdminDashboardTitle>
                    <AdminDashboardSubtitle>Manage your users here</AdminDashboardSubtitle>
                </AdminDashboardHeader>
                <AdminDetails>
                    <AdminName>{adminDetails.name}</AdminName>
                    <AdminEmail>{adminDetails.email}</AdminEmail>
                    <LogoutButton type='button' onClick={handleLogout}>Logout</LogoutButton>
                </AdminDetails>
                <AllUsersDetails>
                    {
                        allUsersDetails.map((user, index) => {
                            return (
                                <UserDetails key={index}>
                                    <UserName>{user.firstName + ' ' + user.lastName}</UserName>
                                    <UserEmail>{user.email}</UserEmail>
                                    <AccountCreationDate>Account created on: {user.date}</AccountCreationDate>
                                </UserDetails>
                            )
                        })
                    }
                </AllUsersDetails>
            </AdminDashboardContainer>
        </AdminDashboardWrapper>
    )
}

export default AdminDashboard