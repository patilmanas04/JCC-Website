import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
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

    @media screen and (max-width: 480px){
        padding: 0 10px;
        height: 60px;
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

    @media screen and (max-width: 480px){
        width: 40px;
        height: 40px;
    }
`

export const NavbarTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 25px;
    font-weight: 700;
    margin-left: 10px;

    @media screen and (max-width: 480px){
        font-size: 23px;
    }
`

export const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 1068px){
        display: none;
    }
`

export const NavbarItem = styled(NavLink)`
    width: fit-content;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

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

    &.active::after{
        width: 100%;
    }

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const DashboardButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
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
        opacity: 0.8;
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

export const ProfileButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    cursor: pointer;
`

export const NavbarMobileMenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 1068px){
        display: block;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        width: 35px;
        height: 35px;
    }
`

export const NavbarMobileMenu = styled.div`
    position: absolute;
    top: 80px;
    left: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 40px;
    gap: 10px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    transition: left ease-in-out 0.3s;

    &.active{
        left: 0;
    }

    @media screen and (max-width: 768px){
        padding: 20px 20px;
        max-height: calc(100vh - 60px);
    }

    @media screen and (max-width: 480px){
        padding: 20px 10px;
        top: 60px;
    }
`

export const NavbarMobileMenuControlsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`

export const NavbarMobileMenuProfileButton = styled.button`
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

export const NavbarMobileItem = styled(NavLink)`
    width: fit-content;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: color ease-in-out 0.2s;
    user-select: none;

    &:hover{
        color: ${({ theme }) => theme.colors.accent};
    }

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }

    &.active{
        color: ${({ theme }) => theme.colors.accent};
    }
`