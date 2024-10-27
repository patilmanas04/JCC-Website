import styled from "styled-components"

export const AdminDashboardWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 40px;
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
    font-size: 48px;
    color: ${({ theme }) => theme.colors.primary};
`

export const AdminDashboardSubtitle = styled.h2`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
`

export const AdminDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const AdminName = styled.h2`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
`

export const AdminEmail = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
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
    flex-basis: 350px;
    flex-grow: 1;
    flex-shrink: 10;
`

export const UserName = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
`

export const UserEmail = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
`

export const AccountCreationDate = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
`