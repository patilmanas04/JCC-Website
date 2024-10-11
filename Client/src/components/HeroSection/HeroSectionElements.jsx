import styled from "styled-components"
import banner from '../../assets/banner.png'

export const HeroSectionWrapper = styled.section`
    width: 100%;
    height: 720px;
    margin-top: 80px;
    background: url('${banner}');
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
    color: ${({ theme }) => theme.primary};
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`

export const HeroSectionSubtitle = styled.p`
    color: ${({ theme }) => theme.primary};
    font-size: 24px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 18px;
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
        gap: 10px;
    }
`

export const OurServicesButton = styled.a`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
    font-size: 18px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 768px){
        padding: 8px 16px;
        font-size: 16px;
    }
`

export const ScheduleACallButton = styled.a`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    font-size: 18px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 768px){
        padding: 8px 16px;
        font-size: 16px;
    }
`