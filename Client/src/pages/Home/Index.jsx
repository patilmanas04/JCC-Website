import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Index'
import Introduction from '../../components/Introduction/Index'
import About from '../../components/About/Index'
import Services from '../../components/Services/Index'
import Benefits from '../../components/Benefits/Index'
import JCCForStudents from '../../components/JCCForStudents/Index'
import Contact from '../../components/Contact/Index'
import Footer from '../../components/Footer/Index'
import Copyright from '../../components/Copyright/Index'
import BackToTopButton from '../../components/BackToTopButton/Index'
import AdminNavbar from '../../components/AdminNavbar/Index'
import userContext from '../../contexts/userContext'
import { Helmet } from 'react-helmet-async'

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
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            <Helmet>
                <title>JCC - Transforming Futures with Expert Counseling</title>
                <meta name="description" content="Discover JCC's expert counseling services and personalized guidance to shape your future. Start your journey with us today!" />
                <meta name="keywords" content="career counseling services, expert guidance, personalized advice, student success, professional counseling platform, best counseling services online" />
                <link rel="canonical" href="https://joharicareerconsultancy.com/" />
            </Helmet>
            {
                isAdmin.status?<AdminNavbar />:<Navbar />
            }
            <Introduction />
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