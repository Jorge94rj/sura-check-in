import React, { useState } from 'react';
import RegisterPageContainer from './register.styles';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { strings } from '../../constants/lang/es/strings';

const RegisterPage = () => {

    const [userData, setUserData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        company: '',
        charge: '',
    });

    const onChangeEvent = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const { name, address, phone, email, company, charge, register } = strings;

    return (
        <RegisterPageContainer>
            <form className='form-container'>
                <h2>Registro</h2>
                <FormInput label={name} name='name' onChangeEvent={onChangeEvent} />
                <FormInput label={address} name='address' onChangeEvent={onChangeEvent} />
                <FormInput label={phone} name='phone' onChangeEvent={onChangeEvent} />
                <FormInput label={email} name='email' onChangeEvent={onChangeEvent} />
                <FormInput label={company} name='company' onChangeEvent={onChangeEvent} />
                <FormInput label={charge} name='charge' onChangeEvent={onChangeEvent} />
                <CustomButton>{register}</CustomButton>
            </form>
        </RegisterPageContainer>
    );
}

export default RegisterPage;