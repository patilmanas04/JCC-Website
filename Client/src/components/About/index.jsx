import React from 'react'
import { AboutWrapper, AboutContainer, AboutContent, AboutTitle, AboutDescription, Options, ServicesButton, ScheduleaCallButton } from './AboutElements'

const About = () => {
    return (
        <>
            <AboutWrapper id='about'>
                <AboutContainer>
                    <AboutContent>
                        <AboutTitle>Unlock Your Full Career Potential with JCC</AboutTitle>
                        <AboutDescription>
                            Take the first step towards a fulfilling career with us today! 
                        </AboutDescription>
                    </AboutContent>
                    <Options>
                        <ServicesButton href='#'>Our Services</ServicesButton>
                        <ScheduleaCallButton href='#'>Schedule a Call</ScheduleaCallButton>
                    </Options>
                </AboutContainer>
            </AboutWrapper>
        </>
    )
}

export default About