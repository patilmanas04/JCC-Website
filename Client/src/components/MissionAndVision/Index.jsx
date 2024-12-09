import React from 'react'
import { missionAndVision } from '../../data/constants.js'
import { MissionAndVisionWrapper, MissionAndVisionTitle, Span, MissionAndVisionContainer, Item, ItemIcon, ItemTitle, ItemDescription } from './Styles'

const MissionAndVision = () => { 
    return (
        <MissionAndVisionWrapper>
            <MissionAndVisionTitle>Our <Span>Mission & Vision</Span></MissionAndVisionTitle>
            <MissionAndVisionContainer>
                {
                    missionAndVision.map((item) => {
                        return (
                            <Item key={item.id}>
                                <ItemIcon loading="lazy" src={item.icon} alt={item.title}/>
                                <ItemTitle>{item.title}</ItemTitle>
                                <ItemDescription>{item.description}</ItemDescription>
                            </Item>
                        )
                    })
                }
            </MissionAndVisionContainer>
        </MissionAndVisionWrapper>
    )
}

export default MissionAndVision