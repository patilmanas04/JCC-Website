import React, { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'
import { useNavigate } from 'react-router-dom'
import GoToHomeButton from '../../components/GoToHomeButton/Index'
import { Helmet } from 'react-helmet-async'

const CallScheduler = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            navigate('/login')
        }
    })

    return (
        <>
            <Helmet>
                <title>Schedule a Call with JCC Experts</title>
                <meta name="description" content="Book a personalized counseling session with JCC's experts to discuss your goals and receive tailored guidance for success." />
                <meta name="keywords" content="schedule a counseling session, JCC expert guidance, book a counseling call, personalized career counseling, online career counseling booking" />
                <link rel="canonical" href="https://joharicareerconsultancy.com/scheduleacall" />
            </Helmet>
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