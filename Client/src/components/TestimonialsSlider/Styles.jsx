import styled from "styled-components";

export const TestimonialsSliderWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 100px 40px;

    @media screen and (max-width: 768px){
        padding: 50px 20px;
    }
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin-bottom: 80px;
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

export const TestimonialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;
    background-color: ${({ theme }) => theme.colors.background};
    text-align: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    @media screen and (max-width: 480px){
        padding: 20px 20px;
    }
`

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 999px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`

export const Testimonial = styled.p`
    font-size: ${({ theme }) => theme.typography.desktopBody};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    font-weight: 500;
    line-height: ${({ theme }) => theme.typography.lineHeight};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`

export const Name = styled.h2`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    margin-top: 10px;
    line-height: ${({ theme }) => theme.typography.lineHeight};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const Occupation = styled.p`
    font-size: ${({ theme }) => theme.typography.desktopBody};
    color: ${({ theme }) => theme.colors.primary};
    line-height: ${({ theme }) => theme.typography.lineHeight};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletBody};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileBody};
    }
`