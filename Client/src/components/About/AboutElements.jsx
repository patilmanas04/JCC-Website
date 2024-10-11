import styled from "styled-components"

export const AboutWrapper = styled.section`
    background: ${({ theme }) => theme.background};
    padding: 100px 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 40px 20px;
    }
`

export const AboutContainer = styled.div`
    max-width: 1200px;
    display: flex;
    background-color: ${({ theme }) => theme.secondary};
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px;
    border-radius: 10px;

    @media screen and (max-width: 927px){
        flex-direction: column;
        padding: 25px;
    }
`

export const AboutDescription = styled.p`
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    width: 70%;
    text-align: justify;

    @media screen and (max-width: 1000px){
        width: 50%;
    }

    @media screen and (max-width: 927px){
        width: 100%;
    }
`

export const AboutImage = styled.img`
    width: 30%;
    margin-left: 40px;

    @media screen and (max-width: 1000px){
        width: 50%;
    }

    @media screen and (max-width: 927px){
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }
`