import React from 'react';
import MyEventsPageContainer from './my-events.styles';

import Card from '../../components/card/card.component';

import { strings } from '../../constants/lang/es/strings';

const cardContainer = {
    width: '85vw',
    height: '15vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px'
};

const MyEventsPage = () => {
    const { myEventsPageTitle } = strings;
    return (
        <MyEventsPageContainer>
            <h2>{myEventsPageTitle}</h2>
            <div style={cardContainer}>
                <Card title='title' />
            </div>
        </MyEventsPageContainer>
    );
};

export default MyEventsPage;