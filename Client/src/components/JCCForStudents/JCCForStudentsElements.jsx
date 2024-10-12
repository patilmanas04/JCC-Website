import styled from "styled-components"
import WhyJCCForStudentsBackgroundImage from '../../assets/why_jcc_for_students.jpg'

export const JCCForStudentsWrapper = styled.section`
    margin-top: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem 40px;
    background-image: url(${WhyJCCForStudentsBackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7); /* Adjust the opacity as needed */
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }

    @media screen and (max-width: 768px){
        padding: 5rem 20px;
    }
`

export const JCCForStudentsContent = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const JCCForStudentsTitle = styled.h1`
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.background};
    line-height: 1.2;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.accent};
`

export const JCCForStudentsDescription = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.background};
    margin-top: 20px;

    @media screen and (max-width: 768px){
        font-size: 16px;
        text-align: justify;
    }
`