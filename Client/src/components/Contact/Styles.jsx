import styled from "styled-components"

export const ContactWrapper = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
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
    color: ${({ theme }) => theme.colors.background};
`

export const ContactTitle = styled.h1`
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    font-weight: 500;
    line-height: ${({ theme }) => theme.typography.lineHeight};
    margin-bottom: 5px;

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileHeading};
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`

export const ContactSubtitle = styled.p`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
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
    color: ${({ theme }) => theme.colors.background};

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
    font-size: 20px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 55px;
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
    border: 2px solid transparent;

    &:focus{
        outline: none;
        border-color: ${({ theme }) => theme.colors.background};
    }

    @media screen and (max-width: 768px){
        height: 50px;
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        height: 45px;
        font-size: 16px;
        border-width: 1.5px;
    }
`

export const Textarea = styled.textarea`
    max-width: 100%;
    width: 100%;
    height: 130px;
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
    border: 2px solid transparent;

    &:focus{
        outline: none;
        border-color: ${({ theme }) => theme.colors.background};
    }

    @media screen and (max-width: 768px){
        height: 100px;
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        height: 80px;
        font-size: 16px;
        border-width: 1.5px;
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
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.accent};
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
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
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
    align-items: flex-start;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.background};
    gap: 30px;

    @media screen and (max-width: 890px){
        gap: 20px;
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
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 999px;

    @media screen and (max-width: 768px){
        width: 70px;
        height: 70px;
    }

    @media screen and (max-width: 480px){
        max-width: 60px;
        min-width: 60px;
        height: 60px;
    }
`

export const Icon = styled.div`
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 35px;
    }

    @media screen and (max-width: 480px){
        width: 30px;
    }
`

export const InformationContent = styled.div`
    margin-left: 20px;

    @media screen and (max-width: 768px){
        margin-left: 15px;
    }
`

export const InformationTitle = styled.h2`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const InformationSubtitle = styled.p`
    font-size: 18px;
    word-break: break-word;
    
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    
    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const DropDownMenuWrapper = styled.div`
    width: 100%;
    height: 55px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-top: 2px solid ${({ theme }) => theme.colors.background};
        border-left: 2px solid ${({ theme }) => theme.colors.background};
        right: 15px;
        top: 50%;
        transform: translateY(-60%) rotate(225deg);
        font-size: 15px;
    }

    @media screen and (max-width: 768px){
        height: 50px;
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        height: 45px;
        font-size: 16px;

        &::after{
            width: 6px;
            height: 6px;
        }
    }
` 

export const DropDownMenu = styled.select`
    width: 100%;
    height: 55px;
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
    color: ${({ theme }) => theme.colors.background};
    border: 2px solid transparent;
    appearance: none;

    &:focus{
        outline: none;
        border-color: ${({ theme }) => theme.colors.background};
    }

    @media screen and (max-width: 768px){
        height: 50px;
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        height: 45px;
        font-size: 16px;
    }
`

export const Option = styled.option`
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
`