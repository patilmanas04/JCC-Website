import styled from "styled-components"

export const ServicesWrapper = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 40px;

    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`

export const ServicesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
`

export const ServicesTitle = styled.h1`
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    text-align: center;
    line-height: 1.2;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.accent};
`

export const ServicesSubtitle = styled.p`
    font-size: 24px;
    color: ${({ theme }) => theme.primary};
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`

export const ServicesContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    max-width: 1200px;
    width: 100%;
`

export const ServiceCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    gap: 20px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 10px;
    }
`

export const ServiceCardImage = styled.img`
    width: 50%;

    @media screen and (max-width: 768px){
        width: 100%;
        order: 1;
    }
`

export const ServiceCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    width: 50%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const ServiceCardTitle = styled.h2`
    border-left: 5px solid ${({ theme }) => theme.accent};
    padding-left: 6px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;

    @media screen and (max-width: 1000px){
        font-size: 24px;
    }
`

export const ServiceCardSubtitle = styled.p`
    font-size: 16px;

    @media screen and (max-width: 1000px){
        font-size: 14px;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.divider};
`

export const ServiceCardDescription = styled.p`
    font-size: 16px;
    line-height: 1.7;
    text-align: justify;

    @media screen and (max-width: 1000px){
        font-size: 14px;
    }

    @media screen and (max-width: 768px){
        /* text-align: left; */
        line-height: 1.5;
    }
`