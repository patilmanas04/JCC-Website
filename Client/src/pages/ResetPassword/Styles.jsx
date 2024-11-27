import styled from "styled-components";

export const ResetPasswordWrapper = styled.section`
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

export const ResetPasswordContainer = styled.div`
    max-width: 500px;
    width: 100%;
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

export const ResetPasswordContent = styled.div`
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

export const ResetPasswordTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;

    @media screen and (max-width: 500px){
        font-size: 26px;
    }
`

export const ResetPasswordSubtitle = styled.p`
    font-size: 16px;
    line-height: 1.2;
    margin-top: 10px;

    @media screen and (max-width: 500px){
        font-size: 15px;
    }
`

export const ResetPasswordForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const ResetPasswordField = styled.div`
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

export const ResetPasswordButton = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const ResetPasswordFooter = styled.p`
    width: 100%;
    font-size: 16px;
    text-align: center;
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
`