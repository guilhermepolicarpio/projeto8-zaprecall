import React from 'react';

import Logo from '../../assets/images/logo.png';
import { Button, ContentWrapper } from './InitialScreen-styled';

export default function InitialScreen({ setTela }) {

    return (
        <ContentWrapper>
            <img src={Logo} alt="" />
            <h1>Zap Recall</h1>
            <Button onClick={() => setTela('flash')}>
                <h2>Start</h2>
            </Button>
        </ContentWrapper>
    )
}