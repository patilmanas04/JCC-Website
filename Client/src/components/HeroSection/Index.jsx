import React from 'react'
import { HeroSectionWrapper, HeroSectionContent, HeroSectionTitle, HeroSectionSubtitle, HeroSectionButtons, OurServicesButton, ScheduleACallButton } from './HeroSectionElements'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <HeroSectionContent>
                <HeroSectionTitle>Unlock Your Full Career Potential with JCC</HeroSectionTitle>
                <HeroSectionSubtitle>Take the first step towards a fulfilling career with us today!</HeroSectionSubtitle>
                <HeroSectionButtons>
                    <OurServicesButton href='#services'>Our Services</OurServicesButton>
                    <Link to='/scheduleacall'><ScheduleACallButton>Schedule a Call</ScheduleACallButton></Link>
                </HeroSectionButtons>
            </HeroSectionContent>
        </HeroSectionWrapper>
    )
}

export default HeroSection