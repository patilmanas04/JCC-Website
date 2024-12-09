import styled from "styled-components";

export const OurUniqueApproachWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 40px;
    background-color: #e8e8e8;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 50px 20px;
    }
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    line-height: ${({ theme }) => theme.typography.lineHeight};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileHeading};
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.accent};
`

export const PointsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    max-width: 1440px;
    width: 100%;

    @media screen and (max-width: 1200px){
        gap: 20px;
    }

    @media screen and (max-width: 1080px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, auto);
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
    height: 100%;

    &.container-1{
        justify-content: flex-end;
        padding-right: 10px;
        padding-top: 140px;
    }

    &.container-3{
        justify-content: flex-start;
        padding-left: 10px;
        padding-top: 140px;
    }

    &.container-4{
        align-items: flex-end;
    }

    &.container-6{
        align-items: flex-end;
    }

    @media screen and (max-width: 1080px){
        &.container-1, &.container-3{
            padding: 0;
            justify-content: center;
        }

        &.container-4, &.container-6{
            align-items: center;
        }

        &.container-5{
            display: none;
        }

        &.container-3{
            grid-column: span 2;
        }
    }

    @media screen and (max-width: 768px){
        &.container-3{
            grid-column: span 1;
        }
    }
`

export const Point = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    height: fit-content;
    width: 238px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 1080px){
        max-width: 400px;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 768px){
        padding: 20px 10px;
        min-width: 238px;
    }
`

export const PointIcon = styled.img`
    width: 40px;
`

export const PointTitle = styled.h2`
    margin-top: 10px;
    font-size: 20px;
    line-height: ${({ theme }) => theme.typography.lineHeight};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.background};
`

export const PointDescription = styled.p`
    margin-top: 6px;
    font-size: ${({ theme }) => theme.typography.desktopBody};
    color: ${({ theme }) => theme.colors.background};

    @media screen and (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const CenterImage = styled.img`
    width: 100%;
    height: auto;
    justify-self: flex-start;
`