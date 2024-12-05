import React from 'react'
import LeftArrowIcon from "../Icons/LeftArrowIcon"
import { GoToHomeButtonInside, LeftArrowIconWrapper } from './Styles'
import { useNavigate } from 'react-router-dom'

const GoToHomeButton = () => {
    const navigate = useNavigate()

    return (
        <GoToHomeButtonInside onClick={() => navigate('/')}><LeftArrowIconWrapper><LeftArrowIcon /></LeftArrowIconWrapper>Go to home</GoToHomeButtonInside>
    )
}

export default GoToHomeButton