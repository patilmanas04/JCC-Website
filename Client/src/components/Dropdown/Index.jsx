import React from 'react'
import { NavbarItem, Title, DropdownWrapper, DropdownList, DropdownItem, Divider } from './Styles'
import DownArrowIcon from '../Icons/DownArrowIcon'

const Dropdown = ({ title, list }) => {
    return (
        <NavbarItem>
            <Title>{title}</Title>
            <DownArrowIcon />
            <DropdownWrapper>
                <DropdownList>
                    {
                        list.map((item, index) => {
                            return <>
                                <DropdownItem key={index} to={item.path} >{item.title}</DropdownItem>
                                {
                                    index !== list.length - 1 && <Divider />
                                }
                            </>
                        })
                    }
                </DropdownList>
            </DropdownWrapper>
        </NavbarItem>
    )
}

export default Dropdown