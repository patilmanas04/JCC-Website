import React from 'react'
import { CircularProgress } from '@mui/material'
import { theme } from '../../utils/themes'

const Loader = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <CircularProgress style={{
                color: theme.colors.accent,
            }} />
        </div>
    )
}

export default Loader