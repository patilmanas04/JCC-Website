import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const AlertBoxWrapper = styled.div`
    width: 100%;
`

const AlertBox = (props) => {
    const { message, severity } = props
    return (
        <AlertBoxWrapper>
            <Alert variant="filled" severity={severity}>{message}</Alert>
        </AlertBoxWrapper>
    )
}

export default AlertBox