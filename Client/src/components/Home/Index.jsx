import React from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection/Index'
import About from '../About/Index'
import Services from '../Services/Index'
import { Benefit } from '../Benefits/BenefitsElements'
import JCCForStudents from '../JCCForStudents/Index'
import Contact from '../Contact/Index'
import Footer from '../Footer/Index'
import Copyright from '../Copyright/Index'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Services />
            <Benefit />
            <JCCForStudents />
            <Contact />
            <Footer />
            <Copyright />
        </>
    )
}

export default Home