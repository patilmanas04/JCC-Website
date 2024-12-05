import React, { useState } from 'react'
import EyeIcon from "../../Icons/EyeIcon"
import EyeSlashIcon from "../../Icons/EyeSlashIcon"
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
                <InputPasswordIcon onClick={togglePasswordVisibility}>
                    {
                        passwordVisible?<EyeSlashIcon/>:<EyeIcon/>
                    }
                </InputPasswordIcon>
            </InputPasswordIconWrapper>
        </InputPasswordWrapper>
    )
}

export default InputPassword