import React, { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'
import { useNavigate } from 'react-router-dom'
import GoToHomeButton from '../../components/GoToHomeButton/Index'

const CallScheduler = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            navigate('/login')
        }

        document.title = 'JCC | Schedule a Call'
    })

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px'
            }}><GoToHomeButton /></div>
            <InlineWidget url='https://calendly.com/joharicareercounsultancy'/>
        </>
    )
}

export default CallScheduler