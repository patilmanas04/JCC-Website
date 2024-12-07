import React from 'react'
import { Outlet } from 'react-router-dom'

const NoNavbarLayout = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default NoNavbarLayout