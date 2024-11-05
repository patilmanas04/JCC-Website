import React, { useEffect, useState } from 'react'
import DeleteIcon from '../../assets/delete_icon.svg'
import { AdminDashboardWrapper, AdminDashboardContainer, AdminDashboardHeader, AdminDashboardTitle, AdminDashboardSubtitle, AdminDetails, AdminName, AdminEmail, LogoutButton, AllUsersDetails, UserDetails, UserName, UserEmail, AccountCreationDate, DeleteButtonWrapper, DeleteAccountButton, ConfirmDeleteModal, DeleteModalContent, DeleteModalTitle, DeleteModalButtons, DeleteModalButton } from './AdminDashboardElements'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [adminDetails, setAdminDetails] = useState({
        name: '',
        email: ''
    })

    const [selectedUser, setSelectedUser] = useState('')

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

    const toggleDeleteModal = (userId) => {
        setIsDeleteModalOpen(!isDeleteModalOpen)
        setSelectedUser(userId)
    }

    const handleDelete = async () => {
        // const updatedUsersList = allUsersDetails.filter(user => user._id !== selectedUser)
        // setAllUsersDetails(updatedUsersList)
        // setIsDeleteModalOpen(!isDeleteModalOpen)

        try{
            const response = await fetch('http://localhost:3000/api/auth/deleteuser', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken')
                },
                body: JSON.stringify({userId: selectedUser})
            })

            const data = await response.json()

            if(data.success){
                const updatedUsersList = allUsersDetails.filter(user => user._id !== selectedUser)
                setAllUsersDetails(updatedUsersList)
                setIsDeleteModalOpen(!isDeleteModalOpen)
            }
        }
        catch(error){
            console.error(error)
        }
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
                        allUsersDetails.length > 0 ?
                        allUsersDetails.map((user, index) => {
                            return (
                                <UserDetails key={index}>
                                    <UserName>{user.firstName + ' ' + user.lastName}</UserName>
                                    <UserEmail>{user.email}</UserEmail>
                                    <AccountCreationDate>Account created on: {user.date}</AccountCreationDate>
                                    <DeleteButtonWrapper onClick={() => toggleDeleteModal(user._id)}>
                                        <DeleteAccountButton src={DeleteIcon}/>
                                    </DeleteButtonWrapper>
                                </UserDetails>
                            )
                        }):<p>No users found</p>
                    }
                </AllUsersDetails>
                <ConfirmDeleteModal className={(isDeleteModalOpen)?'show':''}>
                    <DeleteModalContent>
                        <DeleteModalTitle>Are you sure you want to delete this account?</DeleteModalTitle>
                        <DeleteModalButtons>
                            <DeleteModalButton className='yes' onClick={handleDelete}>Yes</DeleteModalButton>
                            <DeleteModalButton onClick={toggleDeleteModal}>No</DeleteModalButton>
                        </DeleteModalButtons>
                    </DeleteModalContent>
                </ConfirmDeleteModal>
            </AdminDashboardContainer>
        </AdminDashboardWrapper>
    )
}

export default AdminDashboard