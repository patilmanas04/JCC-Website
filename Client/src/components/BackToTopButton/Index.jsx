import React from 'react'
import { assets } from '../../data/constants'
import { BackToTopButtonWrapper, BackToTopButtonIcon } from './Styles'

const BackToTopButton = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <BackToTopButtonWrapper onClick={handleClick}>
            <BackToTopButtonIcon src={assets.up_arrow} loading="lazy" />
        </BackToTopButtonWrapper>
    )
}

export default BackToTopButton