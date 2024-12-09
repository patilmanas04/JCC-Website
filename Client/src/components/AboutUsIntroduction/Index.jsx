import React from 'react'
import { AboutUsIntroductionWrapper, AboutUsIntroductionContent, AboutUsIntroductionTitle, AboutUsIntroductionSubtitle, Span } from './Styles'

const AboutUsIntroduction = () => {
    return (
        <AboutUsIntroductionWrapper>
            <AboutUsIntroductionContent>
                <AboutUsIntroductionTitle>About <Span>Johari Career Consultancy</Span></AboutUsIntroductionTitle>
                <AboutUsIntroductionSubtitle>Empowering Futures Through Expert Counseling and Personalized Guidance</AboutUsIntroductionSubtitle>
            </AboutUsIntroductionContent>
        </AboutUsIntroductionWrapper>
    )
}

export default AboutUsIntroduction