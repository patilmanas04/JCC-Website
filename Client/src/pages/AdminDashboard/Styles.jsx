import styled from "styled-components"

export const AdminDashboardWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 40px;
    overflow: auto;

    @media screen and (max-width: 768px){
        padding: 20px;
    }

    @media screen and (max-width: 480px){
        margin-top: 60px;
    }
` 

export const AdminDashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    gap: 30px;
`

export const AdminDashboardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const AdminDashboardTitle = styled.h1`
    font-size: ${({ theme }) => theme.typography.desktopHeading};
    color: ${({ theme }) => theme.colors.primary};
    line-height: ${({ theme }) => theme.typography.lineHeight};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileHeading};
    }
`

export const AdminDashboardSubtitle = styled.h2`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const AdminDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const AdminName = styled.h2`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const AdminEmail = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const LogoutButton = styled.button`
    margin-top: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover{
        background-color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const AllUsersDetails = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 8px;
    padding: 20px;
    flex-basis: 320px;
    flex-grow: 1;
`

export const UserName = styled.h3`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px){
        font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }

    @media screen and (max-width: 480px){
        font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    }
`

export const UserEmail = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const AccountCreationDate = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px){
        font-size: 12px;
    }

    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`

export const DeleteButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: 12px;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    cursor: pointer;

    @media screen and (max-width: 768px){
        width: 40px;
        height: 40px;
    }
`

export const DeleteAccountButton = styled.div`
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 24px;
    }
`

export const ConfirmDeleteModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: none;

    &.show{
        display: flex;
    }

    @media screen and (max-width: 768px){
        padding: 20px;
    }
`

export const DeleteModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 8px;
    padding: 40px;
`

export const DeleteModalTitle = styled.h3`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const DeleteModalButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const DeleteModalButton = styled.button`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 8px 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &.yes{
        background-color: ${({ theme }) => theme.colors.accent};
    }

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`