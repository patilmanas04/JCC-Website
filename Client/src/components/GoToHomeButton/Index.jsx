import React from 'react'
import { assets } from '../../data/constants'
import { GoToHomeButtonInside, LeftArrowIcon } from './Styles'
import { useNavigate } from 'react-router-dom'

const GoToHomeButton = () => {
    const navigate = useNavigate()

    return (
        <GoToHomeButtonInside onClick={() => navigate('/')}><LeftArrowIcon fetchPriority='high' loading="lazy" src={assets.left_arrow} />Go to home</GoToHomeButtonInside>
    )
}

export default GoToHomeButton