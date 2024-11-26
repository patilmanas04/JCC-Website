import styled from "styled-components"

export const CopyrightWrapper = styled.section`
    width: 100%;
    padding: 10px 40px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 10px 20px;
    }
`

export const CopyrightText = styled.p`
    width: 100%;
    font-size: ${({ theme }) => theme.typography.desktopBody};
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`