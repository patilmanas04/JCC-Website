import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarItem = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`

export const Title = styled.p`
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

export const DropdownWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    padding: 10px;
    z-index: 100;

    &::before{
        content: '';
        width: 10px;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.secondary};
        position: absolute;
        top: -6.5px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border-top: 1px solid ${({ theme }) => theme.colors.divider};
        border-left: 1px solid ${({ theme }) => theme.colors.divider};
    }

    ${NavbarItem}:hover &{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const DropdownList = styled.div`
    display: flex;
    flex-direction: column;
`

export const DropdownItem = styled(NavLink)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    padding: 10px;
    border-radius: 5px;
    width: 200px;

    &:hover{
        background-color: ${({ theme }) => theme.colors.background};
    }

    &.active{
        background-color: ${({ theme }) => theme.colors.background};
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