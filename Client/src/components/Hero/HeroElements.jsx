import styled from "styled-components";

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`

const HeroContainer = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 10px;
    background-color: ${props => props.theme.secondary};
`

const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-family: "Poppins", system-ui;
`

const HeroDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const HeroImage = styled.img`
    width: 70%;
`

export { HeroWrapper, HeroContainer, HeroContent, HeroDescription, HeroImageWrapper, HeroImage }