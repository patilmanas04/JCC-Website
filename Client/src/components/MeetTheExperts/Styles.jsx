import styled from "styled-components";

export const MeetTheExpertsWrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 50px 20px;
    }
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.background};
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

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    max-width: 1200px;
    width: 100%;
`

export const ExpertCard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    padding: 110px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 280px;
    max-width: 386.66px;
    width: 100%;
    height: auto;
    position: relative;
    margin-top: 100px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
    flex-grow: 1;

    @media screen and (max-width: 480px){
        padding: 90px 20px 30px 20px;
    }
`

export const ExpertImage = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 999px;
    object-fit: cover;
    position: absolute;
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 480px){
        width: 150px;
        height: 150px;
        top: -75px;
    }
`

export const ExpertName = styled.h2`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const ExpertDesignation = styled.p`
    font-size: ${({ theme }) => theme.typography.desktopBody};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const ExpertBio = styled.p`
    font-size: ${({ theme }) => theme.typography.desktopBody};
    color: ${({ theme }) => theme.colors.secondaryText};
    text-align: center;
    margin-top: 5px;

    @media screen and (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`