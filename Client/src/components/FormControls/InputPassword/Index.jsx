import React, { useState } from 'react'
import { assets } from '../../../data/constants'
import { InputPasswordWrapper, InputPasswordField, InputPasswordIconWrapper, InputPasswordIcon } from './Styles'

const InputPassword = (props) => {
    const { placeholder, reference} = props

    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)

        if(passwordVisible){
            reference.current.type = 'password'
        }
        else{
            reference.current.type = 'text'
        }
    }

    return (
        <InputPasswordWrapper>
            <InputPasswordField type="password" placeholder={placeholder} ref={reference} required/>
            <InputPasswordIconWrapper>
                <InputPasswordIcon loading="lazy" fetchPriority='high' src={passwordVisible?assets.eye_icon:assets.eye_slash_icon} alt="eye" onClick={togglePasswordVisibility}/>
            </InputPasswordIconWrapper>
        </InputPasswordWrapper>
    )
}

export default InputPassword