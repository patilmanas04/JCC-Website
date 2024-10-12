import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu_icon.svg'
import close_icon from '../../assets/close_icon.svg'
import { NavbarWrapper, NavbarContainer, NavbarLogo, NavbarIcon, NavbarTitle, NavbarMenu, NavbarItem, LoginButton, NavbarMobileMenuIcon, NavbarMobileMenu } from './NavbarElements'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
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
                    <Link to="/login"><LoginButton type='button'>Login</LoginButton></Link>
                </NavbarMenu>
                <NavbarMobileMenuIcon src={!isOpen?menu_icon:close_icon} logo='menu_icon' onClick={toggleMenu}/>
                <NavbarMobileMenu className={isOpen?'active':''}>
                    <NavbarItem href='#aboutus'>About Us</NavbarItem>
                    <NavbarItem href='#services'>Services</NavbarItem>
                    <NavbarItem href='#contactus'>Contact Us</NavbarItem>
                    <Link to='/login'><LoginButton type='button'>Login</LoginButton></Link>
                </NavbarMobileMenu>
            </NavbarContainer>
        </NavbarWrapper>
    )
}

export default Navbar