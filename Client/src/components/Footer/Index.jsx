import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../data/constants'
import { FooterWrapper, FooterContainer, FooterInformation, CompanyName, Logo, CompanyNameText, CompanyAddress, AddressTitle, Address, CompanyContact, ContactDetails, ContactIcon, ContactText, CompanySocialMedia, SocialMediaTitle, SocialMediaLinks, SocialMediaLink, SocialMediaIcon, FooterLinks, LinksTitle, QuickLinks, QuickLink} from './Styles'

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
                            <ContactIcon loading="lazy" src={assets.email_icon} alt="Email" />
                            <ContactText>joharicareercounsultancy@gmail.com</ContactText>
                        </ContactDetails>
                        <ContactDetails>
                            <ContactIcon loading="lazy" src={assets.phone_icon} alt="Phone" />
                            <ContactText>+91 6232586854</ContactText>
                        </ContactDetails>
                    </CompanyContact>
                    <CompanySocialMedia>
                        <SocialMediaTitle>Follow Us</SocialMediaTitle>
                        <SocialMediaLinks>
                            <SocialMediaLink href='https://www.instagram.com/johari_counsultancy?igsh=Yzl5NnM0NWZ0bGhy' target='_blank'><SocialMediaIcon loading="lazy" src={assets.instagram_icon}/></SocialMediaLink>
                        </SocialMediaLinks>
                    </CompanySocialMedia>
                </FooterInformation>
                <FooterLinks>
                    <LinksTitle>Quick Links</LinksTitle>
                    <QuickLinks>
                        <QuickLink href='#aboutus'>About Us</QuickLink>
                        <QuickLink href='#services'>Services</QuickLink>
                        <QuickLink href='#contactus'>Contact Us</QuickLink>
                        <QuickLink><Link to='/scheduleacall'>Schedule a call</Link></QuickLink>
                    </QuickLinks>
                </FooterLinks>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer