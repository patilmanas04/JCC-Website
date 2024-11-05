import React, { useEffect, useState } from 'react'
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

const Home = () => {
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
        document.title = "JCC | Home"
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            <Navbar />
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