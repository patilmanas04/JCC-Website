import React from 'react'
import { services, assets } from '../../data/constants'
import { ServicesWrapper, ServicesContent, ServicesTitle, Span, ServicesSubtitle, ServicesContainer, ServiceCard, ServiceCardImageWrapper, ServiceCardImage, ServiceCardContent, ServiceCardTitle, ServiceCardSubtitle, Divider, ServiceCardDescription, WantToConnect } from './Styles'

const Services = () => {
    const serviceImages = assets.serviceImages
    
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
                                    <ServiceCardImageWrapper>
                                        <ServiceCardImage loading='lazy' fetchPriority='high' src={serviceImages[index]} alt={service.title} />
                                    </ServiceCardImageWrapper>
                                    <ServiceCardContent>
                                        <ServiceCardTitle>{service.title}</ServiceCardTitle>
                                        <ServiceCardSubtitle>{service.subtitle}</ServiceCardSubtitle>
                                        <Divider></Divider>
                                        <ServiceCardDescription>{service.description}</ServiceCardDescription>
                                        {service.id===5?<WantToConnect href='#contactus'>Want to Connect?</WantToConnect>:""}
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
                                    {service.id===5?<WantToConnect href='#contactus'>Want to Connect?</WantToConnect>:""}
                                </ServiceCardContent>
                                <ServiceCardImageWrapper>
                                    <ServiceCardImage loading='lazy' fetchPriority='high' src={serviceImages[index]} alt={service.title} />
                                </ServiceCardImageWrapper>
                            </ServiceCard>
                        )
                    })
                }
            </ServicesContainer>
        </ServicesWrapper>
    )
}

export default Services