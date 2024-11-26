import styled from "styled-components";

export const GoToHomeButtonInside = styled.p`
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