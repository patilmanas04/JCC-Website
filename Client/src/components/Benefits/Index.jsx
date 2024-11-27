import React from 'react'
import { benefits, assets } from '../../data/constants'
import { BenefitsWrapper, BenefitsTitle, Span, BenefitsContainer, Benefit, BenefitIcon, BenefitTitle, BenefitDescription } from './Styles.jsx'

const Benefits = () => {
    const benefitsIcons = assets.benefitsIcons
    
    return (
        <BenefitsWrapper>
            <BenefitsTitle>Why choose <Span>us?</Span></BenefitsTitle>
            <BenefitsContainer>
                {
                    benefits.map((benefit, index) => {
                        return (
                            <Benefit key={index}>
                                <BenefitIcon loading="lazy" src={benefitsIcons[index]} alt={benefit.title}/>
                                <BenefitTitle>{benefit.title}</BenefitTitle>
                                <BenefitDescription>{benefit.description}</BenefitDescription>
                            </Benefit>
                        )
                    })
                }
            </BenefitsContainer>
        </BenefitsWrapper>
    )
}

export default Benefits