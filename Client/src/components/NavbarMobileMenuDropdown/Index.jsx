import React, { useState } from 'react'
import DownArrowIcon from '../Icons/DownArrowIcon'
import { NavbarMenuItemWrapper, NavbarMobileItem, Title, DropdownWrapper, DropdownList, DropdownItem, Divider } from './Styles'

const NavbarMobileMenuDropdown = ({ title, list, handleMobileMenuItemClick }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleMenuItemClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <NavbarMenuItemWrapper>
            <NavbarMobileItem onClick={handleMenuItemClick}>
                <Title>{title}</Title>
                <DownArrowIcon />
            </NavbarMobileItem>
            <DropdownWrapper className={isOpen?"open":""}>
                <DropdownList>
                    {
                        list.map((item, index) => {
                            return <>
                                <DropdownItem key={index} to={item.path} onClick={handleMobileMenuItemClick}>{item.title}</DropdownItem>
                                {
                                    index !== list.length - 1 && <Divider />
                                }
                            </>
                        })
                    }
                </DropdownList>
            </DropdownWrapper>
        </NavbarMenuItemWrapper>
    )
}

export default NavbarMobileMenuDropdown