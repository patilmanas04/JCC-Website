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

    @media screen and (max-width: 768px){
        height: 50px;
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        height: 45px;
        font-size: 16px;
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

    @media screen and (max-width: 768px){
        height: 100px;
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        height: 80px;
        font-size: 16px;
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
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.background};

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
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 999px;

    @media screen and (max-width: 768px){
        width: 70px;
        height: 70px;
    }

    @media screen and (max-width: 480px){
        width: 60px;
        height: 60px;
    }
`

export const Icon = styled.img`
    width: 40px;

    @media screen and (max-width: 768px){
        width: 35px;
    }

    @media screen and (max-width: 480px){
        width: 30px;
    }
`

export const InformationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
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

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const Divider = styled.div`
    width: 2px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0 40px;

    @media screen and (max-width: 628px){
        display: none;
    }
`

export const Modal = styled.div`
    display: none;
    position: fixed;
    z-index: 999;
    left: 10px;
    bottom: 10px;
    max-width: 320px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 15px 30px 15px 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(22, 22, 22, 0.25);

    &.show {
        display: block;
    }
`

export const ModalContent = styled.p`
    color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    text-align: left;
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