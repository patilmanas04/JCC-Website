import styled from "styled-components"
import { assets } from "../../data/constants"

export const AboutUsAboutWrapper = styled.section`
    background: ${({ theme }) => theme.colors.background};
    background-image: url(${assets.about_us_text_bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 100px 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 40px 20px;
    }
`

export const AboutUsAboutContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondary};
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 10px;

    @media screen and (max-width: 927px){
        flex-direction: column;
        padding: 25px;
    }
`

export const AboutUsAboutDescription = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.desktopBody};
    width: 100%;
    text-align: justify;

    @media screen and (max-width: 1000px){
        width: 50%;
    }

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 927px){
        width: 100%;
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`