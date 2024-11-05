import React from 'react'
import { CircularProgress } from '@mui/material'
import { theme } from '../../utils/themes'

const Loader = () => {
    return (
        <CircularProgress style={{
            color: theme.colors.accent,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }} />
    )
}

export default Loader