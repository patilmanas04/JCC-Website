import React from 'react'
import { services } from '../../data/constants'
import Image1 from '../../assets/individual_career_counselling.jpg'
import Image2 from '../../assets/resume_and_cover_letter_assistance.jpg'
import Image3 from '../../assets/interview_preparation.jpg'
import Image4 from '../../assets/career_workshops.jpg'
import Image5 from '../../assets/corporate_partnerships.jpg'
import { ServicesWrapper, ServicesContent, ServicesTitle, Span, ServicesSubtitle, ServicesContainer, ServiceCard, ServiceCardImage, ServiceCardContent, ServiceCardTitle, ServiceCardSubtitle, Divider, ServiceCardDescription } from './ServicesElements'

const Services = () => {
    const serviceImages = [Image1, Image2, Image3, Image4, Image5]

    return (
        <ServicesWrapper id='services'>
            <ServicesContent>
                <ServicesTitle>Our <Span>Services</Span></ServicesTitle>
                <ServicesSubtitle>Tailored Career Solutions to Help You Achieve Your Professional Goals</ServicesSubtitle>
            </ServicesContent>
            <ServicesContainer>
                {
                    services.map((service, index) => {
                        if(index % 2 === 0){
                            return (
                                <ServiceCard key={service.id}>
                                    <ServiceCardImage src={serviceImages[index]} alt={service.title} />
                                    <ServiceCardContent>
                                        <ServiceCardTitle>{service.title}</ServiceCardTitle>
                                        <ServiceCardSubtitle>{service.subtitle}</ServiceCardSubtitle>
                                        <Divider></Divider>
                                        <ServiceCardDescription>{service.description}</ServiceCardDescription>
                                    </ServiceCardContent>
                                </ServiceCard>
                            )
                        }
                        return (
                            <ServiceCard key={service.id}>
                                <ServiceCardContent>
                                    <ServiceCardTitle>{service.title}</ServiceCardTitle>
                                    <ServiceCardSubtitle>{service.subtitle}</ServiceCardSubtitle>
                                    <Divider></Divider>
                                    <ServiceCardDescription>{service.description}</ServiceCardDescription>
                                </ServiceCardContent>
                                <ServiceCardImage src={serviceImages[index]} alt={service.title} />
                            </ServiceCard>
                        )
                    })
                }
            </ServicesContainer>
        </ServicesWrapper>
    )
}

export default Services