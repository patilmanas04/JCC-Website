import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import menu_icon from '../../assets/menu_icon.svg'
import close_icon from '../../assets/close_icon.svg'
import ProfileIcon from '../../assets/profile_icon.svg'
import userContext from '../../contexts/userContext'
import { AdminNavbarWrapper, AdminNavbarContainer, AdminNavbarLogo, AdminNavbarIcon, AdminNavbarTitle, AdminNavbarMenu, AdminNavbarItem, LoginButton, AdminNavbarMobileMenuIcon, AdminNavbarMobileMenu, DashboardButton, LogoutButton, ProfileButton } from './Styles'

const AdminNavbar = () => {
    const context = useContext(userContext)
    const { isAdmin, setIsAdmin, setUserCredentials } = context

    const navigate = useNavigate()
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if(token){
            setIsLoggedIn(true)
        }
    })

    const handleClickOnLogo = () => {
        navigate('/')
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
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
        setIsLoggedIn(false)
        navigate('/')
    }

    const handleMobileMenuItemClick = () => {
        setIsOpen(false)
    }

    return (
        <AdminNavbarWrapper>
            <AdminNavbarContainer>
                <AdminNavbarLogo onClick={handleClickOnLogo}>
                    <AdminNavbarIcon src={logo} alt='logo' />
                    <AdminNavbarTitle>JCC Admin</AdminNavbarTitle>
                </AdminNavbarLogo>
                <AdminNavbarMenu>
                    {
                        location.pathname==="/"?<>
                        <AdminNavbarItem href='#aboutus'>About us</AdminNavbarItem>
                        <AdminNavbarItem href='#services'>Services</AdminNavbarItem>
                        <AdminNavbarItem href='#contactus'>Contact us</AdminNavbarItem>
                        {isAdmin.status&&<Link to='/admin-dashboard'><DashboardButton>Dashboard</DashboardButton></Link>}
                        </>:<AdminNavbarItem><Link to='/'>Go to home</Link></AdminNavbarItem>
                    }
                    {
                        isLoggedIn?<><LogoutButton type='button' onClick={handleLogout}>Logout</LogoutButton><Link to='/profile'><ProfileButton src={ProfileIcon} alt='profile_icon'/></Link></>:<Link to='/login'><LoginButton type='button'>Login</LoginButton></Link>
                    }
                </AdminNavbarMenu>
                <AdminNavbarMobileMenuIcon src={!isOpen?menu_icon:close_icon} logo='menu_icon' onClick={toggleMenu}/>
                <AdminNavbarMobileMenu className={isOpen?'active':''}>
                    {
                        location.pathname==="/"?<><AdminNavbarItem href='#aboutus' onClick={handleMobileMenuItemClick}>About us</AdminNavbarItem>
                        <AdminNavbarItem href='#services' onClick={handleMobileMenuItemClick}>Services</AdminNavbarItem>
                        <AdminNavbarItem href='#contactus' onClick={handleMobileMenuItemClick}>Contact us</AdminNavbarItem>{isAdmin.status&&<AdminNavbarItem><Link to="/admin-dashboard">Dashboard</Link></AdminNavbarItem>}</>:<AdminNavbarItem><Link to='/'>Go to home</Link></AdminNavbarItem>
                    }
                    {
                        isLoggedIn?<><AdminNavbarItem onClick={handleMobileMenuItemClick}><Link to="/profile">Profile</Link></AdminNavbarItem><AdminNavbarItem type='button' onClick={handleLogout}>Logout</AdminNavbarItem></>:<AdminNavbarItem><Link to="/login">Login</Link></AdminNavbarItem>
                    }
                </AdminNavbarMobileMenu>
            </AdminNavbarContainer>
        </AdminNavbarWrapper>
    )
}

export default AdminNavbar