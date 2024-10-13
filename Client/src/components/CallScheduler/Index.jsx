import React, { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'
import { useNavigate } from 'react-router-dom'

const CallScheduler = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            navigate('/login')
        }
    })

    return (
        <InlineWidget url='https://calendly.com/22amtics235' />
    )
}

export default CallScheduler