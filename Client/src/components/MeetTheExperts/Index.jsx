import React from 'react'
import { teamMembers } from '../../data/constants'
import { MeetTheExpertsWrapper, Title, Span, Container, ExpertCard, ExpertImage, ExpertName, ExpertDesignation, ExpertBio } from './Styles'

const MeetTheExperts = () => {
    return (
        <MeetTheExpertsWrapper>
            <Title>Meet the <Span>Experts Behind JCC</Span></Title>
            <Container>
                {
                    teamMembers.map((member) => {
                        return (
                            <ExpertCard key={member.name}>
                                <ExpertImage src={member.profilePicture} alt={member.name} />
                                <ExpertName>{member.name}</ExpertName>
                                <ExpertDesignation>{member.designation}</ExpertDesignation>
                                <ExpertBio>{member.bio}</ExpertBio>
                            </ExpertCard>
                        )
                    })
                }
            </Container>
        </MeetTheExpertsWrapper>
    )
}

export default MeetTheExperts