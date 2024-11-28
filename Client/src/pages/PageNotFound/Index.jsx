import React from 'react'
import { assets } from '../../data/constants'
import GoToHomeButton from '../../components/GoToHomeButton/Index'
import { PageNotFoundWrapper, PageNotFoundContainer, PageNotFoundContent, PageNotFoundIcon, PageNotFoundTitle, PageNotFoundSubtitle, PageNotFoundFooter, Logo, LogoText } from './Styles'

const PageNotFound = () => {
    return (
        <PageNotFoundWrapper>
            <PageNotFoundContainer>
                <PageNotFoundContent>
                    <PageNotFoundIcon src={assets.page_not_found_404} />
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