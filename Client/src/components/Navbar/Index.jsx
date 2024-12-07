import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../../data/constants'
import userContext from '../../contexts/userContext'
import MenuIcon from '../Icons/MenuIcon'
import CloseIcon from '../Icons/CloseIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import { userConfig, adminConfig } from '../../config/navbarConfig'
import { NavbarWrapper, NavbarContainer, NavbarLogo, NavbarIcon, NavbarTitle, NavbarMenu, NavbarItem, LoginButton, NavbarMobileMenuIcon, NavbarMobileMenu, LogoutButton, ProfileButton, DashboardButton, NavbarMobileItem, NavbarMobileMenuControlsWrapper, NavbarMobileMenuProfileButton } from './Styles'
import Dropdown from '../Dropdown/Index'
import NavbarMobileMenuDropdown from '../NavbarMobileMenuDropdown/Index'

const Navbar = ({ isAdmin }) => {
    const menuRef = useRef(null)
    const location = useLocation()
    const context = useContext(userContext)
    const { setIsAdmin, setUserCredentials } = context

    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if(token){
            setIsLoggedIn(true)
        }

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        setUserCredentials({
            firstName: '',
            lastName: '',
            email: ''
        })
        setIsAdmin({
            status: false,
            checked: false
        })
        setIsLoggedIn(false)
    }

    const handleMobileMenuItemClick = () => {
        setIsOpen(false)
    }

    return (
        <NavbarWrapper>
            <NavbarContainer>
                <Link to="/">
                    <NavbarLogo>
                        <NavbarIcon src={assets.logo} alt='logo' fetchPriority='high'/>
                        <NavbarTitle>{isAdmin.status?"JCC Admin":"JCC"}</NavbarTitle>
                    </NavbarLogo>
                </Link>
                <NavbarMenu>
                    {
                        (location.pathname==="/admin-dashboard")?
                        <NavbarItem to="/">Go to home</NavbarItem>:
                        (isAdmin.status?adminConfig:userConfig).map((item, index) => {
                            if(item.type === "link"){
                                return <NavbarItem key={index} to={item.path}>{item.title}</NavbarItem>
                            }
                            else if(item.type === "dropdown"){
                                return <Dropdown key={index} title={item.title} list={item.children}/>
                            }
                            else if(item.type === "adminButton"){
                                return <Link to={item.path} key={index}><DashboardButton>{item.title}</DashboardButton></Link>
                            }
                        })
                    }
                    {
                        isLoggedIn?<><LogoutButton type='button' onClick={handleLogout}>Logout</LogoutButton><Link to='/profile'><ProfileButton><ProfileIcon/></ProfileButton></Link></>:<Link to='/login'><LoginButton type='button'>Login</LoginButton></Link>
                    }
                </NavbarMenu>
                <NavbarMobileMenuIcon onClick={toggleMenu}>
                    {
                        !isOpen?<MenuIcon />:<CloseIcon />
                    }
                </NavbarMobileMenuIcon>
                <NavbarMobileMenu ref={menuRef} className={isOpen?'active':''}>
                    <NavbarMobileMenuControlsWrapper>
                    {
                        isLoggedIn?<><LogoutButton type='button' onClick={handleLogout}>Logout</LogoutButton><Link to="/profile"><NavbarMobileMenuProfileButton type='button'>Profile</NavbarMobileMenuProfileButton></Link></>:<Link to="/login"><LoginButton type='button'>Login</LoginButton></Link>
                    }
                    </NavbarMobileMenuControlsWrapper>
                    {
                        (location.pathname==="/admin-dashboard")?
                        <NavbarMobileItem to="/" onClick={handleMobileMenuItemClick}>Go to home</NavbarMobileItem>:
                        (isAdmin.status?adminConfig:userConfig).map((item, index) => {
                            if(item.type === "link"){
                                return <NavbarMobileItem key={index} onClick={handleMobileMenuItemClick} to={item.path}>{item.title}</NavbarMobileItem>
                            }
                            else if(item.type === "dropdown"){
                                return <NavbarMobileMenuDropdown key={index} title={item.title} list={item.children}/>
                            }
                            else if(item.type === "adminButton"){
                                return <Link to={item.path} key={index}><DashboardButton style={{margin: "10px 0"}} onClick={handleMobileMenuItemClick}>{item.title}</DashboardButton></Link>
                            }
                        })
                    }
                </NavbarMobileMenu>
            </NavbarContainer>
        </NavbarWrapper>
    )
}

export default Navbar