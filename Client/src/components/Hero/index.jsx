import React from 'react'
import HeroImagePng from '../../assets/CC1.png'
import { HeroWrapper, HeroContainer, HeroContent, HeroDescription, HeroImageWrapper, HeroImage } from './HeroElements'

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroContainer>
                <HeroContent>
                    <HeroDescription>
                        At JCC, we unleash your full potential through our individual workshops designed to help you navigate your career path. During these one-on-one talks, we will go over several career options that align with your interests, skills, and values. We'll collaborate to set clear, attainable goals and devise practical strategies to make your ambitions a reality. Our personalized approach guarantees you get the information and support you need to succeed, whether you're changing careers, developing in your current field, exploring new choices, or building a CV and LinkedIn profile. We also offer simulated interviews prior to genuine interviews. 
                    </HeroDescription>
                </HeroContent>
                <HeroImageWrapper>
                    <HeroImage src={HeroImagePng} alt="Hero Image" />
                </HeroImageWrapper>
            </HeroContainer>
        </HeroWrapper>
    )
}

export default Hero