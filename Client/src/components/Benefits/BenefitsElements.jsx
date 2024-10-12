import styled from "styled-components"
import line from '../../assets/line.svg'

export const BenefitsWrapper = styled.section`
    margin-top: 60px;
    width: 100%;
    padding: 40px;
    background-color: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${line});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;

    @media screen and (max-width: 768px){
        padding: 20px;
    }
`

export const BenefitsTitle = styled.h1`
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    text-align: center;
    line-height: 1.2;

    @media screen and (max-width: 768px){
        font-size: 36px;
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.accent};
`

export const BenefitsContainer = styled.div`
    margin-top: 60px;
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media screen and (max-width: 675px){
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

export const Benefit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 5px 5px 50px rgba(163, 163, 163, 0.25);
    padding: 40px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.background};
`

export const BenefitIcon = styled.img`
    width: 40px;
`

export const BenefitTitle = styled.h2`
    margin-top: 10px;
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`

export const BenefitDescription = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.secondaryText};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`