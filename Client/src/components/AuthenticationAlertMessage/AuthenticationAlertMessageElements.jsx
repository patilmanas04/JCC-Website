import styled from "styled-components"

export const AuthenticationAlertMessageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1rem;
    
    &.success{
        background-color: ${props => props.theme.colors.success};
    }

    &.fail{
        background-color: ${props => props.theme.colors.error};
    }
`

export const AlertMessage = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: ${props => props.theme.colors.background};
    text-align: center;
    width: 100%;
`