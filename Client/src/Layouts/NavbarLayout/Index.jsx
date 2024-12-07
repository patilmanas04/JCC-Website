import React, { useContext, useEffect } from 'react'
import Navbar from "../../components/Navbar/Index"
import userContext from '../../contexts/userContext'
import { Outlet } from 'react-router-dom'

const NavbarLayout = () => {
    const context = useContext(userContext)
    const { isAdmin, setIsAdmin } = context

	useEffect(() => {
		const checkAdmin = async () => {
            const response = await fetch('http://localhost:3000/api/auth/checkadmin', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken')
                }
            })

            const data = await response.json()

            if(data.success){
                setIsAdmin({
                    status: true,
                    checked: true
                })
            }
        }

        if(localStorage.getItem('authToken')){
            if(!isAdmin.checked){
                checkAdmin()
            }
        }
	}, [])

    return (
        <>
        <Navbar isAdmin={isAdmin}/>
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default NavbarLayout