import React from 'react';
import FormInputComponent from './form-input.styles';


const FormInput = ({ label, onChangeEvent, ...inputProps }) => {
    return (
        <FormInputComponent>
            <div className='form-group'>
                <span className='form-label'>{label}</span>
                <input className='form-input' {...inputProps} onChange={onChangeEvent} />
            </div>
        </FormInputComponent>
    )
};

export default FormInput;