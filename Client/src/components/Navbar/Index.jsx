import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import menu_icon from '../../assets/menu_icon.svg'
import close_icon from '../../assets/close_icon.svg'
import ProfileIcon from '../../assets/profile_icon.svg'
import userContext from '../../contexts/userContext'
import { NavbarWrapper, NavbarContainer, NavbarLogo, NavbarIcon, NavbarTitle, NavbarMenu, NavbarItem, LoginButton, NavbarMobileMenuIcon, NavbarMobileMenu, LogoutButton, ProfileButton } from './Styles'

const Navbar = () => {
    const context = useContext(userContext)
    const { setIsAdmin, setUserCredentials } = context

    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if(token){
            setIsLoggedIn(true)
        }
    })

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
    }

    const handleMobileMenuItemClick = () => {
        setIsOpen(false)
    }

    return (
        <NavbarWrapper>
            <NavbarContainer>
                <NavbarLogo>
                    <NavbarIcon src={logo} alt='logo' />
                    <NavbarTitle>JCC</NavbarTitle>
                </NavbarLogo>
                <NavbarMenu>
                    <NavbarItem href='#aboutus'>About Us</NavbarItem>
                    <NavbarItem href='#services'>Services</NavbarItem>
                    <NavbarItem href='#contactus'>Contact Us</NavbarItem>
                    {
                        isLoggedIn?<><LogoutButton type='button' onClick={handleLogout}>Logout</LogoutButton><Link to='/profile'><ProfileButton src={ProfileIcon} alt='profile_icon'/></Link></>:<Link to='/login'><LoginButton type='button'>Login</LoginButton></Link>
                    }
                </NavbarMenu>
                <NavbarMobileMenuIcon src={!isOpen?menu_icon:close_icon} logo='menu_icon' onClick={toggleMenu}/>
                <NavbarMobileMenu className={isOpen?'active':''}>
                    <NavbarItem href='#aboutus' onClick={handleMobileMenuItemClick}>About Us</NavbarItem>
                    <NavbarItem href='#services' onClick={handleMobileMenuItemClick}>Services</NavbarItem>
                    <NavbarItem href='#contactus' onClick={handleMobileMenuItemClick}>Contact Us</NavbarItem>
                    {
                        isLoggedIn?<><NavbarItem onClick={handleMobileMenuItemClick}><Link to="/profile">Profile</Link></NavbarItem><NavbarItem type='button' onClick={handleLogout}>Logout</NavbarItem></>:<NavbarItem><Link to="/login">Login</Link></NavbarItem>
                    }
                </NavbarMobileMenu>
            </NavbarContainer>
        </NavbarWrapper>
    )
}

export default Navbar