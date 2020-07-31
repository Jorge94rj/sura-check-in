import React, { useState } from 'react';
import LoginPageContainer from './log-in.styles';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const LoginPage = () => {

    const [credentials, setCredentials] = useState({
        user: '',
        password: ''
    });

    const onChangeEvent = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    const onSubmitEvent = (e) => {
        e.preventDefault();
        console.log(credentials);
    }

    return (
        <LoginPageContainer>
            <form className="form-container" onSubmit={onSubmitEvent}>
                <h2>Iniciar sesión</h2>
                <FormInput label='Usuario' name='user' type='text' onChangeEvent={onChangeEvent} />
                <FormInput label='Contraseña' name='password' type='password' onChangeEvent={onChangeEvent} />
                <CustomButton type='submit'>
                    Iniciar sesión
                </CustomButton>
            </form>
        </LoginPageContainer>
    )
};

export default LoginPage;