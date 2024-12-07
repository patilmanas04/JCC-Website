import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSectionWrapper, HeroSectionContent, HeroSectionTitle, HeroSectionSubtitle, HeroSectionButtons, OurServicesButton, ScheduleACallButton } from './Styles'

const Introduction = () => {
    return (
        <HeroSectionWrapper>
            <HeroSectionContent>
                <HeroSectionTitle>Unlock Your Full Career Potential with JCC</HeroSectionTitle>
                <HeroSectionSubtitle>Take the first step towards a fulfilling career with us today!</HeroSectionSubtitle>    
                <HeroSectionButtons>
                    <OurServicesButton href='#services'>Our Services</OurServicesButton>
                    <Link to='/schedule-a-call'><ScheduleACallButton>Schedule a Call</ScheduleACallButton></Link>
                </HeroSectionButtons>
            </HeroSectionContent>
        </HeroSectionWrapper>
    )
}

export default Introduction