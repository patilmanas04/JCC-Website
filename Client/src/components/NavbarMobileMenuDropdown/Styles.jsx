import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarMenuItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`

export const NavbarMobileItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

export const Title = styled.p`
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

    &.active{
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

export const DropdownWrapper = styled.div`
    margin-top: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    display: none;
    padding: 10px;

    &.open{
        display: block;
    }
`

export const DropdownList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 768px){
        gap: 8px;
    }

    @media screen and (max-width: 480px){
        gap: 6px;
    }
`

export const DropdownItem = styled(NavLink)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    transition: color ease-in-out 0.2s;

    &:hover{
        color: ${({ theme }) => theme.colors.accent};
    }

    &.active{
        color: ${({ theme }) => theme.colors.accent};
    }

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.divider};
`