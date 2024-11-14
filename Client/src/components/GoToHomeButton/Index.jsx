import React from 'react'
import LeftArrow from '../../assets/left_arrow.svg'
import { GoToHomeButtonInside, LeftArrowIcon } from './Styles'
import { useNavigate } from 'react-router-dom'

const GoToHomeButton = () => {
    const navigate = useNavigate()

    return (
        <GoToHomeButtonInside onClick={() => navigate('/')}><LeftArrowIcon src={LeftArrow} />Go to home</GoToHomeButtonInside>
    )
}

export default GoToHomeButton