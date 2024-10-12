import React from 'react'
import LogoImage from '../../assets/logo.png'
import EmailIcon from '../../assets/email_icon.svg'
import PhoneIcon from '../../assets/phone_icon.svg'
import { FooterWrapper, FooterContainer, FooterInformation, CompanyName, Logo, CompanyNameText, CompanyAddress, AddressTitle, Address, CompanyContact, ContactDetails, ContactIcon, ContactText, CompanySocialMedia, SocialMediaTitle, SocialMediaLinks, SocialMediaLink, SocialMediaIcon, FooterLinks, LinksTitle, QuickLinks, QuickLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterInformation>
                    <CompanyName>
                        <Logo src={LogoImage} alt="Logo" />
                        <CompanyNameText>Johari Career Consultancy</CompanyNameText>
                    </CompanyName>
                    <CompanyAddress>
                        <AddressTitle>Registered Office:</AddressTitle>
                        <Address>182/3, Magarmuha, Ujjain, Madhya Pradesh, 456010</Address>
                    </CompanyAddress>
                    <CompanyContact>
                        <ContactDetails>
                            <ContactIcon src={EmailIcon} alt="Email" />
                            <ContactText>jcc@gmail.com</ContactText>
                        </ContactDetails>
                        <ContactDetails>
                            <ContactIcon src={PhoneIcon} alt="Phone" />
                            <ContactText>+91 6232586854</ContactText>
                        </ContactDetails>
                    </CompanyContact>
                    <CompanySocialMedia>
                        <SocialMediaTitle>Follow Us:</SocialMediaTitle>
                        <SocialMediaLinks>
                            <SocialMediaLink><SocialMediaIcon src=""/></SocialMediaLink>
                            <SocialMediaLink><SocialMediaIcon src=""/></SocialMediaLink>
                            <SocialMediaLink><SocialMediaIcon src=""/></SocialMediaLink>
                            <SocialMediaLink><SocialMediaIcon src=""/></SocialMediaLink>
                        </SocialMediaLinks>
                    </CompanySocialMedia>
                </FooterInformation>
                <FooterLinks>
                    <LinksTitle>Quick Links:</LinksTitle>
                    <QuickLinks>
                        <QuickLink href='#aboutus'>About Us</QuickLink>
                        <QuickLink href='#services'>Services</QuickLink>
                        <QuickLink href='#contactus'>Contact Us</QuickLink>
                        <QuickLink>Schedule a call</QuickLink>
                    </QuickLinks>
                </FooterLinks>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer