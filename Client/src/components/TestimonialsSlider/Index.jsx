import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { TestimonialsSliderWrapper, Title, Span, TestimonialWrapper, ProfileImage, Testimonial, Name, Occupation } from './Styles'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'
import { testimonials } from '../../data/constants';
import QuoteIcon from "../Icons/QuoteIcon"

const TestimonialsSlider = () => {
    return (
        <TestimonialsSliderWrapper>
            <Title>What <Span>Our Clients Say</Span></Title>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className='swiper'
            >
                {
                    testimonials.map((testimonial) => {
                        return (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialWrapper>
                                    <ProfileImage src={testimonial.image}/>
                                    <Testimonial>{testimonial.testimonial}</Testimonial>
                                    <QuoteIcon width="60px" height="60px"/>
                                    <Name>{testimonial.name}</Name>
                                    <Occupation>{testimonial.occupation}</Occupation>
                                </TestimonialWrapper>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </TestimonialsSliderWrapper>
    )
}

export default TestimonialsSlider