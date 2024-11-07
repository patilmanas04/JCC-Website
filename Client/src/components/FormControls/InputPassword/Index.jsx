import React, { useState } from 'react'
import eyeIcon from '../../../assets/eye_icon.svg'
import eyeSlashIcon from '../../../assets/eye_slash_icon.svg'
import { InputPasswordWrapper, InputPasswordField, InputPasswordIconWrapper, InputPasswordIcon } from './InputPasswordElements'

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
                <InputPasswordIcon src={passwordVisible?eyeIcon:eyeSlashIcon} alt="eye" onClick={togglePasswordVisibility}/>
            </InputPasswordIconWrapper>
        </InputPasswordWrapper>
    )
}

export default InputPassword