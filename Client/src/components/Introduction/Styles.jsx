import styled from "styled-components"
import { assets } from "../../data/constants"


export const HeroSectionWrapper = styled.section`
    width: 100%;
    height: 720px;
    margin-top: 80px;
    background: url(${assets.banner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;

    @media screen and (max-width: 768px){
        height: 600px;
    }

    @media screen and (max-width: 480px){
        margin-top: 60px;
    }
`

export const HeroSectionContent = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeroSectionTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    font-weight: 700;
    text-align: center;
    line-height: ${({ theme }) => theme.typography.lineHeight};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileHeading};
    }
`

export const HeroSectionSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const HeroSectionButtons = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 768px){
        gap: 10px;
    }

    @media screen and (max-width: 380px){
        flex-direction: column;
    }
`

export const OurServicesButton = styled.a`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 768px){
        padding: 8px 16px;
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 380px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const ScheduleACallButton = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 768px){
        padding: 8px 16px;
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 380px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`