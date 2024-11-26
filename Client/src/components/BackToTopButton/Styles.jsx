import styled from "styled-components";

export const BackToTopButtonWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    z-index: 999;
    -webkit-tap-highlight-color: transparent;

    @media screen and (max-width: 480px){
        width: 45px;
        height: 45px;
    }
`

export const BackToTopButtonIcon = styled.img`
    width: 100%;
`