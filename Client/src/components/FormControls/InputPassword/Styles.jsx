import styled from "styled-components";

export const InputPasswordWrapper = styled.div`
    width: 100%;
    position: relative;
`

export const InputPasswordField = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 5px;
    position: relative;

    &:focus{
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`

export const InputPasswordIconWrapper = styled.div`
    height: 90%;
    position: absolute;
    right: 1px;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InputPasswordIcon = styled.img`
    width: 20px;
    cursor: pointer;
    transition: opacity 0.2s;
    -webkit-tap-highlight-color: transparent;

    &:hover{
        opacity: 0.7;
    }
`