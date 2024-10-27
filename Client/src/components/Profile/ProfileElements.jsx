import styled from "styled-components"

export const ProfileWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    padding: 40px 40px;
    overflow-y: scroll;

    @media screen and (max-width: 768px){
        padding: 20px 20px;
    }
`

export const ProfileContainer = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    gap: 40px;

    @media screen and (max-width: 768px){
        padding: 0;
        background: ${({ theme }) => theme.colors.background};
        border: none;
    }
`

export const ProfileTitle = styled.h1`
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.2;
    text-align: center;
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.accent};
`

export const ProfileOverview = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const ProfileIcon = styled.img`
    width: 100px;
`

export const ProfileDetails = styled.div`
    text-align: center;
`

export const ProfileName = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
`

export const ProfileEmail = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondaryText};
`

export const ProfileContent = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;

    @media screen and (max-width: 530px){
        flex-direction: column;
    }
`

export const ProfileItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;

    @media screen and (max-width: 530px){
        width: 100%;
    }
`

export const ProfileLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
`

export const ProfileValue = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
`

export const ProfileActions = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 500px){
        flex-direction: column;
        gap: 10px;
    }
`

export const UpdateProfileButton = styled.button`
    padding: 10px 20px;
    width: 50%;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 500px){
        width: 100%;
    }
`

export const LogoutButton = styled(UpdateProfileButton)`
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.secondary};
`