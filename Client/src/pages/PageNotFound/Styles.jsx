import styled from "styled-components"

export const PageNotFoundWrapper = styled.section`
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

export const PageNotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-radius: 10px;
    padding: 20px;
`

export const PageNotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
`

export const PageNotFoundIcon = styled.img`
    width: 200px;
`

export const PageNotFoundTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`

export const PageNotFoundSubtitle = styled.p`
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
`

export const PageNotFoundFooter = styled.div`
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