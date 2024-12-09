import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    width: 100%;
    padding: 5rem 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 2rem 20px;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 40px;
    }
`

export const FooterInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
`

export const CompanyName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Logo = styled.img`
    width: 50px;
    border-radius: 999px;
`

export const CompanyNameText = styled.h1`
    font-size: 24px;
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`

export const CompanyAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`

export const AddressTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`

export const Address = styled.p`
    font-size: 16px;
    font-weight: 400;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`

export const CompanyContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const ContactDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ContactIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
`

export const ContactText = styled.p`
    font-size: 16px;
    font-weight: 400;
    word-break: break-all;
`

export const CompanySocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const SocialMediaTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`

export const SocialMediaLinks = styled.div`
    display: flex;
    gap: 10px;
`

export const SocialMediaLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.background};
    cursor: pointer;

    @media screen and (max-width: 768px){
        width: 40px;
        height: 40px;
    }
`

export const SocialMediaIcon = styled.div`
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        width: 25px;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

export const LinksTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`

export const QuickLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 768px){
        gap: 5px;
    }
`

export const QuickLink = styled(NavLink)`
    font-size: 16px;
    font-weight: 400;
    width: fit-content;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;

    &::after{
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.background};
        transition: width 0.3s;
    }

    &:hover::after{
        width: 100%;
    }

    &.active::after{
        width: 100%;
    }

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`