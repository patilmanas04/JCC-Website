import styled from "styled-components"

export const EmailVerificationWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};

    @media screen and (max-height: 350px){
        height: 100%;
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
`

export const EmailVerificationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
`

export const EmailVerificationIcon = styled.img`
    width: 200px;
`

export const EmailVerificationTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
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