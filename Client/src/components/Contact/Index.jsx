import React, { useState } from 'react'
import EmailIcon from '../../assets/email_icon.svg'
import PhoneIcon from '../../assets/phone_icon.svg'
import { ContactWrapper, ContactContainer, ContactContent, ContactTitle, Span, ContactSubtitle, ContactForm, ContactField, Label, Input, Textarea, ContactButtons, SendMessageButton, ScheduleACallButton, ContactInformation, Information, IconWrapper, Icon, InformationContent, InformationTitle, InformationSubtitle, Divider, Modal, ModalContent } from './ContactElements'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')
        

        const response = await fetch('http://localhost:3000/api/contact/sendmessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        const data = await response.json()

        if (data.success){
            setShowModal(true)
        }

        e.target.reset()

        setTimeout(() => {
            setShowModal(false)
        }, 4000)
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
                        <Label htmlFor='name'>Name</Label>
                        <Input id='name' name='name' type="text" required/>
                    </ContactField>
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
                            <Icon src={EmailIcon} alt="email"/>
                        </IconWrapper>
                        <InformationContent>
                            <InformationTitle>Email</InformationTitle>
                            <InformationSubtitle>
                                jcc@gmail.com
                            </InformationSubtitle>
                        </InformationContent>
                    </Information>
                    <Divider></Divider>
                    <Information>
                        <IconWrapper>
                            <Icon src={PhoneIcon} alt="phone"/>
                        </IconWrapper>
                        <InformationContent>
                            <InformationTitle>Phone</InformationTitle>
                            <InformationSubtitle>
                                +91 6232586854
                            </InformationSubtitle>
                        </InformationContent>
                    </Information>
                </ContactInformation>
            </ContactContainer>
            <Modal className={showModal?'show':''}>
                <ModalContent>Message send successfully!</ModalContent>
            </Modal>
        </ContactWrapper>
    )
}

export default Contact