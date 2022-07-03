import React from 'react';

import {Container} from './styles';
import {RowBetweenProps} from './types';

const RowBetween = ({children}: RowBetweenProps) => {
    return <Container>{children}</Container>;
};

export default RowBetween;
