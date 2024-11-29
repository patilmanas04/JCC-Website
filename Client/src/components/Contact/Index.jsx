import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Snackbar } from '@mui/material'
import { assets } from '../../data/constants'
import { ContactWrapper, ContactContainer, ContactContent, ContactTitle, Span, ContactSubtitle, ContactForm, ContactField, Label, Input, Textarea, ContactButtons, SendMessageButton, ScheduleACallButton, ContactInformation, Information, IconWrapper, Icon, InformationContent, InformationTitle, InformationSubtitle, DropDownMenu, Option, DropDownMenuWrapper } from './Styles'

const Contact = () => {
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [type, setType] = useState('individual')
    const dropDownRef = useRef()

    const handleDropDownChange = (e) => {
        setType(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')
        const type = dropDownRef.current.value[0].toUpperCase() + dropDownRef.current.value.slice(1)
        const company = formData.get('company')

        const response = await fetch('https://jcc-website.onrender.com/api/contact/sendmessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type,
                name,
                company,
                email,
                message
            })
        })

        const data = await response.json()

        if (data.success){
            setShowSnackbar(true)
        }

        e.target.reset()
    }

    return (
        <ContactWrapper id='contactus'>
            <ContactContainer>
                <ContactContent>
                    <ContactTitle>Contact <Span>Us</Span></ContactTitle>
                    <ContactSubtitle>Let’s work together to empower your career aspirations!</ContactSubtitle>
                </ContactContent>
                <ContactForm onSubmit={handleSubmit}>
                    <ContactField>
                        <Label htmlFor='type'>You are</Label>
                        <DropDownMenuWrapper>
                            <DropDownMenu onChange={handleDropDownChange} ref={dropDownRef} id='type' name='type' required defaultValue="individual">
                                <Option value='individual'>Individual</Option>
                                <Option value='corporate'>Corporate</Option>
                            </DropDownMenu>
                        </DropDownMenuWrapper>
                    </ContactField>
                    <ContactField>
                        <Label htmlFor='name'>Name</Label>
                        <Input id='name' name='name' type="text" required/>
                    </ContactField>
                    {
                        type==='corporate' && (
                            <ContactField>
                                <Label htmlFor='company'>Company</Label>
                                <Input id='company' name='company' type="text" required/>
                            </ContactField>
                        )
                    }
                    <ContactField>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' name='email' type="email" required/>
                    </ContactField>
                    <ContactField>
                        <Label htmlFor='message'>Message</Label>
                        <Textarea id='message' name='message' required/>
                    </ContactField>
                    <ContactButtons>
                        <SendMessageButton type='submit'>Send Message</SendMessageButton>
                        <Link to='/scheduleacall' style={{
                            width: '100%',
                        }}><ScheduleACallButton type='button'>Schedule a Call</ScheduleACallButton></Link>
                    </ContactButtons>
                </ContactForm>
                <ContactInformation>
                <Information>
                        <IconWrapper>
                            <Icon loading="lazy"  src={assets.phone_icon} alt="phone"/>
                        </IconWrapper>
                        <InformationContent>
                            <InformationTitle>Phone</InformationTitle>
                            <InformationSubtitle>
                                +91 6232586854
                            </InformationSubtitle>
                        </InformationContent>
                    </Information>
                    <Information>
                        <IconWrapper>
                            <Icon loading="lazy" src={assets.email_icon} alt="email"/>
                        </IconWrapper>
                        <InformationContent>
                            <InformationTitle>Email</InformationTitle>
                            <InformationSubtitle>
                                joharicareercounsultancy@gmail.com
                            </InformationSubtitle>
                        </InformationContent>
                    </Information>
                </ContactInformation>
            </ContactContainer>
            <Snackbar 
                open={showSnackbar}
                autoHideDuration={5000}
                message="Message sent successfully!"
            />
        </ContactWrapper>
    )
}

export default Contact