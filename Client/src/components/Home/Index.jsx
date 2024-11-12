import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Index'
import HeroSection from '../HeroSection/Index'
import About from '../About/Index'
import Services from '../Services/Index'
import Benefits from '../Benefits/Index'
import JCCForStudents from '../JCCForStudents/Index'
import Contact from '../Contact/Index'
import Footer from '../Footer/Index'
import Copyright from '../Copyright/Index'
import BackToTopButton from '../BackToTopButton/Index'
import userContext from '../../contexts/userContext'
import AdminNavbar from '../AdminNavbar/Index'

const Home = () => {

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

        document.title = "JCC | Home"
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            {
                isAdmin.status?<AdminNavbar />:<Navbar />
            }
            <HeroSection />
            <About />
            <Services />
            <Benefits />
            <JCCForStudents />
            <Contact />
            <Footer />
            <Copyright />
            {
                showBackToTopButton && <BackToTopButton />
            }
        </>
    )
}

export default Home