import styled from "styled-components";

export const NavbarWrapper = styled.section`
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    padding: 0 40px;

    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`

export const NavbarContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavbarLogo = styled.div`
    display: flex;
    align-items: center;
`

export const NavbarIcon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 999px;
`

export const NavbarTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
`

export const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavbarItem = styled.a`
    width: fit-content;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    cursor: pointer;
    text-decoration: none;

    &::before{
        content: '';
        display: block;
        width: 0;
        height: 2px;
    }

    &::after{
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: width ease-in-out 0.3s;
    }

    &:hover::after{
        width: 100%;
    }

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const LoginButton = styled.button`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color ease-in-out 0.3s;
    text-align: center;

    &:hover{
        background-color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const LogoutButton = styled.button`
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color ease-in-out 0.3s;
    text-align: center;

    &:hover{
        background-color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const ProfileButton = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    cursor: pointer;
`

export const NavbarMobileMenuIcon = styled.img`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`

export const NavbarMobileMenu = styled.div`
    display: none;
    flex-direction: column;
    gap: 20px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 5px;

    @media screen and (max-width: 768px){
        &.active{
            display: flex;
            position: absolute;
            top: 90px;
            right: 20px;
            background-color: ${({ theme }) => theme.colors.secondary};
            padding: 20px;
            transition: top ease-in-out 0.3s;
        }
    }
`