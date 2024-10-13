import React from 'react'
import { AuthenticationAlertMessageWrapper, AlertMessage } from './AuthenticationAlertMessageElements'

const AuthenticationAlertMessage = (props) => {
	const { success, message } = props

    return (
		<AuthenticationAlertMessageWrapper className={success?"success":"fail"}>
			<AlertMessage>
				{message}
			</AlertMessage>
		</AuthenticationAlertMessageWrapper>
    )
}

export default AuthenticationAlertMessage