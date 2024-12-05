import React from 'react'
import { BackToTopButtonWrapper, BackToTopButtonIcon } from './Styles'
import UpArrowIcon from "../Icons/UpArrowIcon"

const BackToTopButton = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <BackToTopButtonWrapper onClick={handleClick}>
            <BackToTopButtonIcon>
                <UpArrowIcon />
            </BackToTopButtonIcon>
        </BackToTopButtonWrapper>
    )
}

export default BackToTopButton