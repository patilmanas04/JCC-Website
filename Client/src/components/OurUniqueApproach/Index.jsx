import React from 'react'
import { successPoints, assets } from '../../data/constants'
import { OurUniqueApproachWrapper, Title, Span, PointsContainer, Container, Point, PointIcon, PointTitle, PointDescription, CenterImage } from './Styles'

const OurUniqueApproach = () => {
    return (
        <OurUniqueApproachWrapper>
            <Title>Our <Span>Unique Approach to Career Success</Span></Title>
            <PointsContainer>
                <Container className='container-1'>
                    <Point style={{backgroundColor: successPoints[0].bgColor}}>
                        <PointIcon src={successPoints[0].icon}/>
                        <PointTitle>{successPoints[0].title}</PointTitle>
                        <PointDescription>{successPoints[0].description}</PointDescription>
                    </Point>
                </Container>
                <Container className='container-2'>
                    <Point style={{backgroundColor: successPoints[1].bgColor}}>
                        <PointIcon src={successPoints[1].icon}/>
                        <PointTitle>{successPoints[1].title}</PointTitle>
                        <PointDescription>{successPoints[1].description}</PointDescription>
                    </Point>
                </Container>
                <Container className='container-3'>
                    <Point style={{backgroundColor: successPoints[2].bgColor}}>
                        <PointIcon src={successPoints[2].icon}/>
                        <PointTitle>{successPoints[2].title}</PointTitle>
                        <PointDescription>{successPoints[2].description}</PointDescription>
                    </Point>
                </Container>
                <Container className='container-4'>
                    <Point style={{backgroundColor: successPoints[3].bgColor}}>
                        <PointIcon src={successPoints[3].icon}/>
                        <PointTitle>{successPoints[3].title}</PointTitle>
                        <PointDescription>{successPoints[3].description}</PointDescription>
                    </Point>
                </Container>
                <Container className='container-5'>
                    <CenterImage src={assets.unique_approach_image}/>
                </Container>
                <Container className='container-6'>
                    <Point style={{backgroundColor: successPoints[4].bgColor}}>
                        <PointIcon src={successPoints[4].icon}/>
                        <PointTitle>{successPoints[4].title}</PointTitle>
                        <PointDescription>{successPoints[4].description}</PointDescription>
                    </Point>
                </Container>
            </PointsContainer>
        </OurUniqueApproachWrapper>
    )
}

export default OurUniqueApproach