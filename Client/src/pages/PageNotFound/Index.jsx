import React from 'react'
import { assets } from '../../data/constants'
import PageNotFound404Icon from '../../components/Icons/PageNotFound404Icon'
import GoToHomeButton from '../../components/GoToHomeButton/Index'
import { PageNotFoundWrapper, PageNotFoundContainer, PageNotFoundContent, PageNotFoundIconWrapper, PageNotFoundTitle, PageNotFoundSubtitle, PageNotFoundFooter, Logo, LogoText } from './Styles'

const PageNotFound = () => {
    return (
        <PageNotFoundWrapper>
            <PageNotFoundContainer>
                <PageNotFoundContent>
                    <PageNotFoundIconWrapper>
                        <PageNotFound404Icon />
                    </PageNotFoundIconWrapper>
                    <PageNotFoundTitle>Oops! We Can’t Find That Page</PageNotFoundTitle>
                    <PageNotFoundSubtitle>It seems you’ve found a broken link or mistyped the URL</PageNotFoundSubtitle>
                </PageNotFoundContent>
                <GoToHomeButton />
                <PageNotFoundFooter>
                    <Logo src={assets.logo} loading="lazy" fetchPriority='high'/>
                    <LogoText>Johari Career Consultancy</LogoText>
                </PageNotFoundFooter>
            </PageNotFoundContainer>
        </PageNotFoundWrapper>
    )
}

export default PageNotFound