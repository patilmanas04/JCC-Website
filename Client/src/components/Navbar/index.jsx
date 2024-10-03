import React from 'react'
import Logo from '../../assets/Logo.png' 
import { NavbarWrapper, NavbarContainer, NavbarLogo, NavbarLogoIcon, NavbarLogoIconName, NavbarMenu, NavbarItem, NavbarLink, LoginOptions, LoginButton, SignupButton } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <NavbarWrapper>
                <NavbarContainer>
                    <NavbarLogo>
                        <NavbarLogoIcon src={Logo} alt="Logo" />
                        <NavbarLogoIconName>JCC</NavbarLogoIconName>
                    </NavbarLogo>
                    <NavbarMenu>
                        <NavbarItem>
                            <NavbarLink href="#">About</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="#">Services</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="#">Contact Us</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <LoginOptions>
                                <LoginButton href="#">Log in</LoginButton>
                                <SignupButton href="#">Sign Up</SignupButton>
                            </LoginOptions>
                        </NavbarItem>
                    </NavbarMenu>
                </NavbarContainer>
            </NavbarWrapper>
        </>
    )
}

export default Navbar