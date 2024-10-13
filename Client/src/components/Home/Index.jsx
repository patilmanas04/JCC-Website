import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection/Index'
import About from '../About/Index'
import Services from '../Services/Index'
import Benefits from '../Benefits/Index'
import JCCForStudents from '../JCCForStudents/Index'
import Contact from '../Contact/Index'
import Footer from '../Footer/Index'
import Copyright from '../Copyright/Index'

const Home = () => {
    useEffect(() => {
        document.title = "JCC | Home"
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
        </>
    )
}

export default Home