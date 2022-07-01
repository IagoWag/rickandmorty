import React from 'react';
import {RowProps} from './types';
import {Container} from './styles';

const Row = ({children, ...rest}: RowProps) => {
    return <Container {...rest}>{children}</Container>;
};

export default Row;
