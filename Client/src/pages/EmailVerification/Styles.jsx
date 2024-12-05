import styled from "styled-components"

export const EmailVerificationWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};

    @media screen and (max-height: 443.34px){
        height: 100%;
    }

    @media screen and (max-width: 414px){
        @media screen and (max-height: 490.34px){
            height: 100%;
        }
    }
`

export const EmailVerificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-radius: 10px;
    padding: 20px;

    @media screen and (max-width: 414px){
        height: 100%;
    }
`

export const EmailVerificationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
`

export const EmailVerificationIcon = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EmailVerificationTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`

export const EmailVerificationSubtitle = styled.p`
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
`

export const EmailVerificationFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.img`
    width: 50px;
    border-radius: 999px;
`

export const LogoText = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
`

export const LoginButton = styled.button`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 16px;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
`