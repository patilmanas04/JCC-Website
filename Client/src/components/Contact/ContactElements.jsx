import styled from "styled-components"

export const ContactWrapper = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.accent};
    padding: 100px 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 60px 20px;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    max-width: 1200px;
    width: 100%;

    @media screen and (max-width: 768px){
        gap: 30px;
    }
`

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.background};
`

export const ContactTitle = styled.h1`
    font-size: 48px;
    font-weight: 500;
    line-height: 1.2;

    @media screen and (max-width: 768px){
        font-size: 36px;
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.primary};
`

export const ContactSubtitle = styled.p`
    font-size: 24px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 700px;
    width: 100%;
    color: ${({ theme }) => theme.background};

    @media screen and (max-width: 768px){
        gap: 10px;
    }
`

export const ContactField = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Label = styled.label`
    font-size: 24px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 55px;
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondaryAccent};

    @media screen and (max-width: 768px){
        height: 50px;
    }
`

export const Textarea = styled.textarea`
    max-width: 100%;
    width: 100%;
    height: 130px;
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondaryAccent};

    @media screen and (max-width: 768px){
        height: 100px;
    }
`

export const ContactButtons = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;

    @media screen and (max-width: 768px){
        gap: 10px;
    }
`

export const SendMessageButton = styled.button`
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    font-size: 24px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.accent};
    cursor: pointer;

    @media screen and (max-width: 768px){
        height: 50px;
        font-size: 20px;
    }
`

export const ScheduleACallButton = styled.button`
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    font-size: 24px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    cursor: pointer;

    @media screen and (max-width: 768px){
        height: 50px;
        font-size: 20px;
    }
`

export const ContactInformation = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.background};

    @media screen and (max-width: 628px){
        flex-direction: column;
        gap: 40px;
    }
`

export const Information = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconWrapper = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    border-radius: 999px;
`

export const Icon = styled.img`
    width: 40px;
`

export const InformationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`

export const InformationTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
`

export const InformationSubtitle = styled.p`
    font-size: 18px;
`

export const Divider = styled.div`
    width: 2px;
    height: 100px;
    background-color: ${({ theme }) => theme.background};
    margin: 0 40px;

    @media screen and (max-width: 628px){
        display: none;
    }
`