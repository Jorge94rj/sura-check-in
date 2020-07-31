import React from 'react';
import HomePageContainer from './home.styles';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const HomePage = () => {

    const sayHello = () => {
        console.log('hi');
    }

    return (
        <HomePageContainer>
            <FormInput label='label example' type='text' />
            <CustomButton onClick={sayHello}>
                click me
            </CustomButton>
        </HomePageContainer>
    );
};

export default HomePage;