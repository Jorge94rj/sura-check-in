import React from 'react';
import NavBarContainer from './nav-bar.styles';

import logo from '../../assets/logo.png';

import { strings } from '../../constants/lang/es/strings';

const NavBar = () => {
    const {
        navBarTitle,
        navBarImgUrl,
        logInLabel,
        logOutLabel,
        myEventsPageTitle
    } = strings;

    return (
        <NavBarContainer props={navBarImgUrl} >
            <div className='logo-container'>
                <img className='logo-image' src={logo} alt='logo' />
                <h3 className='logo-title'>{navBarTitle}</h3>
            </div>
            <div className='menu'>
                <span className='menu-item'>{myEventsPageTitle}</span>
                <span className='menu-item'>{logInLabel}</span>
            </div>
        </NavBarContainer>
    );
};

export default NavBar;