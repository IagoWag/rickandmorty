import React from 'react';
import {Container} from './styles';
import {Props} from './types';

const Text = ({children, color, isBold = false, size = 14, ...rest}: Props) => {
    return (
        <Container
            color={color || 'black'}
            isBold={isBold}
            size={size}
            {...rest}>
            {children}
        </Container>
    );
};

export default Text;
