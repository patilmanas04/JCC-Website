import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu_icon.svg'
import close_icon from '../../assets/close_icon.svg'
import { NavbarWrapper, NavbarContainer, NavbarLogo, NavbarIcon, NavbarTitle, NavbarMenu, NavbarItem, LoginButton, NavbarMobileMenuIcon, NavbarMobileMenu } from './NavbarElements'

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
                    <LoginButton href='#'>Login</LoginButton>
                </NavbarMenu>
                <NavbarMobileMenuIcon src={!isOpen?menu_icon:close_icon} logo='menu_icon' onClick={toggleMenu}/>
                <NavbarMobileMenu className={isOpen?'active':''}>
                    <NavbarItem href='#aboutus'>About Us</NavbarItem>
                    <NavbarItem href='#services'>Services</NavbarItem>
                    <NavbarItem href='#contactus'>Contact Us</NavbarItem>
                    <LoginButton href='#'>Login</LoginButton>
                </NavbarMobileMenu>
            </NavbarContainer>
        </NavbarWrapper>
    )
}

export default Navbar