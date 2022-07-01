import React from 'react';
import {HeaderOptionsProps} from './types';
import {Container} from './styles';

const HeaderOptions = ({left, center, right}: HeaderOptionsProps) => {
    return (
        <Container>
            {left}
            {center}
            {right}
        </Container>
    );
};

export default HeaderOptions;
