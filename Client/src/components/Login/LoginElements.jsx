import styled from "styled-components"

export const LoginWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    padding: 0 40px;
    overflow-y: auto;

    @media screen and (max-height: 550px){
        height: 100%;
    }

    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`

export const LoginContainer = styled.div`
    max-width: 500px;
    width: 100%;
    height: 550px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    padding: 60px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px){
        padding: 0;
        border: none;
        align-items: center;
    }
`

export const LoginContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    @media screen and (max-width: 768px){
        align-items: center;
        text-align: center;
    }
`

export const GoToHomeButton = styled.p`
    font-size: 18px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
`

export const LeftArrowIcon = styled.img`
    width: 20px;
`

export const LoginTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;

    @media screen and (max-width: 500px){
        font-size: 26px;
    }
`

export const LoginSubtitle = styled.p`
    font-size: 16px;

    @media screen and (max-width: 500px){
        font-size: 15px;
    }
`

export const LoginForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const LoginField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const Label = styled.label`
    font-size: 16px;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 5px;

    &:focus{
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`

export const LoginButton = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const LoginFooter = styled.p`
    width: 100%;
    font-size: 16px;
    text-align: center;
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
`