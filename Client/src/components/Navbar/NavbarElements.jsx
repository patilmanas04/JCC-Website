import styled from "styled-components";

const NavbarWrapper = styled.div`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    width: 100%;
    height: 80px;
    padding: 20px;
    overflow-x: hidden;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    font-family: "Poppins", system-ui;
    position: fixed;
    top: 0;
    z-index: 1000;
`

const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavbarLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavbarLogoIcon = styled.img`
    width: 50px;
    height: 50px;
`

const NavbarLogoIconName = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-left: 10px;
    font-family: "Poppins", system-ui;
    font-weight: 700;
    font-style: normal;
`

const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-weight: 500;
    font-style: normal;
`

const NavbarItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
/* 
    &:hover {
        &::after {
            width: 100%;
        }
    } */
`

const LoginOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const LoginButton = styled.a`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid ${props => props.theme.primary};
    transition: all 200ms ease-in-out; 

    &:hover {
        background-color: ${props => props.theme.secondary};
        color: ${props => props.theme.primary};
    }
`

const SignupButton = styled.a`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid ${props => props.theme.primary};
    transition: all 200ms ease-in-out; 

    &:hover {
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.secondary};
    }
`

const NavbarLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.primary};

    &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: ${props => props.theme.primary};
        transition: width .3s;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }
`

export { NavbarWrapper, NavbarContainer, NavbarLogo, NavbarLogoIcon, NavbarLogoIconName, NavbarMenu, NavbarItem, NavbarLink, LoginOptions, LoginButton, SignupButton }