import styled from "styled-components"
import { assets } from "../../data/constants"

export const MissionAndVisionWrapper = styled.section`
    width: 100%;
    padding: 100px 40px;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${assets.m_and_v_bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width: 768px){
        padding: 20px;
    }
`

export const MissionAndVisionTitle = styled.h1`
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    line-height: ${({ theme }) => theme.typography.lineHeight};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileHeading};
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.accent};
`

export const MissionAndVisionContainer = styled.div`
    margin-top: 60px;
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media screen and (max-width: 675px){
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 40px;
    }
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 5px 5px 50px rgba(163, 163, 163, 0.25);
    padding: 40px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.background};
`

export const ItemIcon = styled.img`
    width: 40px;
`

export const ItemTitle = styled.h2`
    margin-top: 10px;
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const ItemDescription = styled.p`
    font-size: ${({ theme }) => theme.typography.desktopBody};
    color: ${({ theme }) => theme.colors.secondaryText};

    @media screen and (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`