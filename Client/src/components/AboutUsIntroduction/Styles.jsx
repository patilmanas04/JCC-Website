import styled from "styled-components"
import { assets } from "../../data/constants"


export const AboutUsIntroductionWrapper = styled.section`
    width: 100%;
    height: 720px;
    margin-top: 80px;
    background: url(${assets.about_us_introduction_bg});
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

export const AboutUsIntroductionContent = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutUsIntroductionTitle = styled.h1`
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

export const AboutUsIntroductionSubtitle = styled.p`
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

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.accent};
`