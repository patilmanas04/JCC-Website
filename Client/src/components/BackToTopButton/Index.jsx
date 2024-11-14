import React from 'react'
import UpArrow from '../../assets/up_arrow.svg'
import { BackToTopButtonWrapper, BackToTopButtonIcon } from './Styles'

const BackToTopButton = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <BackToTopButtonWrapper onClick={handleClick}>
            <BackToTopButtonIcon src={UpArrow} />
        </BackToTopButtonWrapper>
    )
}

export default BackToTopButton