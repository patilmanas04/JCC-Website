import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../components/Navbar/Index"
import userContext from '../../contexts/userContext'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Index'
import Copyright from '../../components/Copyright/Index'
import BackToTopButton from '../../components/BackToTopButton/Index'

const NavbarLayout = () => {
    const context = useContext(userContext)
    const { isAdmin, setIsAdmin } = context

    const [showBackToTopButton, setShowBackToTopButton] = useState(false)

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if(scrollPosition > 200){
            setShowBackToTopButton(true)
        }
        else{
            setShowBackToTopButton(false)
        }
    };

	useEffect(() => {
		const checkAdmin = async () => {
            const response = await fetch('http://localhost:3000/api/auth/checkadmin', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken')
                }
            })

            const data = await response.json()

            if(data.success){
                setIsAdmin({
                    status: true,
                    checked: true
                })
            }
        }

        if(localStorage.getItem('authToken')){
            if(!isAdmin.checked){
                checkAdmin()
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
	}, [])

    return (
        <>
        <Navbar isAdmin={isAdmin}/>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
            <Copyright />
        </footer>
        {
            showBackToTopButton && <BackToTopButton />
        }
        </>
    )
}

export default NavbarLayout