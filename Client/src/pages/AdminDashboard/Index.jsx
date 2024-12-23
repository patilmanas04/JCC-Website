import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from "../../components/Icons/DeleteIcon"
import Loader from '../../components/Loader/Index'
import AdminNavbar from '../../components/AdminNavbar/Index'
import userContext from '../../contexts/userContext'
import { formatReadableDate } from '../../utils/formatReadableDate'
import { AdminDashboardWrapper, AdminDashboardContainer, AdminDashboardHeader, AdminDashboardTitle, AdminDashboardSubtitle, AdminDetails, AdminName, AdminEmail, LogoutButton, AllUsersDetails, UserDetails, UserName, UserEmail, AccountCreationDate, DeleteButtonWrapper, DeleteAccountButton, ConfirmDeleteModal, DeleteModalContent, DeleteModalTitle, DeleteModalButtons, DeleteModalButton } from './Styles'
import PageNotFound from '../PageNotFound/Index'
import { Helmet } from 'react-helmet-async'

const AdminDashboard = () => {
    const context = useContext(userContext)
    const { setIsAdmin, adminDetails, setSelectedUserId, allUsersDetails, getAdminAndAllUsersDetails, deleteUser } = context

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isValidUrl, setIsValidUrl] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getAdminAndAllUsersDetails(setIsLoading, setIsValidUrl)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('authToken')

        setIsAdmin({
            status: false,
            checked: false
        })

        navigate('/')
    }

    const toggleDeleteModal = (userId) => {
        setIsDeleteModalOpen(!isDeleteModalOpen)
        setSelectedUserId(userId)
    }

    const handleDelete = async () => {
        deleteUser(isDeleteModalOpen, setIsDeleteModalOpen)
    }

    return (
        <>
            <Helmet>
                <title>Admin Dashboard - JCC</title>
                <meta name="description" content="Administrative dashboard for managing user accounts and settings." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {

                isLoading?<Loader />:
                (isValidUrl)?<>
                    <AdminNavbar />
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
                                                <AccountCreationDate>Account created on: {formatReadableDate(user.date)}</AccountCreationDate>
                                                <DeleteButtonWrapper onClick={() => toggleDeleteModal(user._id)}>
                                                    <DeleteAccountButton>
                                                        <DeleteIcon />
                                                    </DeleteAccountButton>
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
                </>:<PageNotFound />
            }
        </>
    )
}

export default AdminDashboard