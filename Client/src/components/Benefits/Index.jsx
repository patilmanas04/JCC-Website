import React from 'react'
import { benefits } from '../../data/constants'
import benefitIcon1 from '../../assets/lightbulb.svg'
import benefitIcon2 from '../../assets/gear.svg'
import benefitIcon3 from '../../assets/graph.svg'
import benefitIcon4 from '../../assets/calendar.svg'
import { BenefitsWrapper, BenefitsTitle, Span, BenefitsContainer, Benefit, BenefitIcon, BenefitTitle, BenefitDescription } from './Styles.jsx'

const Benefits = () => {
    const benefitsIcons = [benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4]

    return (
        <BenefitsWrapper>
            <BenefitsTitle>Why choose <Span>us?</Span></BenefitsTitle>
            <BenefitsContainer>
                {
                    benefits.map((benefit, index) => {
                        return (
                            <Benefit key={index}>
                                <BenefitIcon src={benefitsIcons[index]} alt={benefit.title} />
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