import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../data/constants'
import { FooterWrapper, FooterContainer, FooterInformation, CompanyName, Logo, CompanyNameText, CompanyAddress, AddressTitle, Address, CompanyContact, ContactDetails, ContactIcon, ContactText, CompanySocialMedia, SocialMediaTitle, SocialMediaLinks, SocialMediaLink, SocialMediaIcon, FooterLinks, LinksTitle, QuickLinks, QuickLink} from './Styles'
import EmailIcon from '../Icons/EmailIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import InstagramIcon from '../Icons/InstagramIcon'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterInformation>
                    <CompanyName>
                        <Logo loading="lazy" src={assets.logo} alt="Logo" />
                        <CompanyNameText>Johari Career Consultancy</CompanyNameText>
                    </CompanyName>
                    <CompanyAddress>
                        <AddressTitle>Registered Office</AddressTitle>
                        <Address>182/3, Magarmuha, Ujjain, Madhya Pradesh, 456010</Address>
                    </CompanyAddress>
                    <CompanyContact>
                        <ContactDetails>
                            <ContactIcon>
                                <EmailIcon />
                            </ContactIcon>
                            <ContactText>joharicareercounsultancy@gmail.com</ContactText>
                        </ContactDetails>
                        <ContactDetails>
                            <ContactIcon>
                                <PhoneIcon />
                            </ContactIcon>
                            <ContactText>+91 6232586854</ContactText>
                        </ContactDetails>
                    </CompanyContact>
                    <CompanySocialMedia>
                        <SocialMediaTitle>Follow Us</SocialMediaTitle>
                        <SocialMediaLinks>
                            <SocialMediaLink href='https://www.instagram.com/johari_counsultancy?igsh=Yzl5NnM0NWZ0bGhy' target='_blank'><SocialMediaIcon><InstagramIcon /></SocialMediaIcon></SocialMediaLink>
                        </SocialMediaLinks>
                    </CompanySocialMedia>
                </FooterInformation>
                <FooterLinks>
                    <LinksTitle>Quick Links</LinksTitle>
                    <QuickLinks>
                        <QuickLink to="/">Home</QuickLink>
                        <QuickLink to="/about-us">About Us</QuickLink>
                        <QuickLink to="/contact-us">Contact Us</QuickLink>
                        <QuickLink to="/schedule-a-call">Schedule a call</QuickLink>
                    </QuickLinks>
                </FooterLinks>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer