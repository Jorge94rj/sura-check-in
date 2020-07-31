import React from 'react';
import CardContainer from './card.styles';

const Card = ({title}) => (
    <CardContainer>
        <span className='card-header'>{title}</span>
        <p className='card-body'>description</p>
    </CardContainer>
);

export default Card;