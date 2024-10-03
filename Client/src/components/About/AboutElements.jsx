import styled from "styled-components";
import banner from "../../assets/Banner.png";

const AboutWrapper = styled.div`
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    color: ${props => props.theme.primary};
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    margin-top: 80px;
    font-family: "Poppins", system-ui;
`

const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AboutTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    text-align: center;
`

const AboutDescription = styled.p`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`

const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const ServicesButton = styled.a`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    border: 2px solid ${props => props.theme.primary};
`

const ScheduleaCallButton = styled.a`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    border: 2px solid ${props => props.theme.primary};
`

export { AboutWrapper, AboutContainer, AboutContent, AboutTitle, AboutDescription, Options, ServicesButton, ScheduleaCallButton }