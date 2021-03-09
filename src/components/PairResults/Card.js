import React from 'react';
import {Card, Pair, Price} from './styles';

const PairResults = ({pair, price}) => {
    return (
        <Card>
            <Pair>{pair}</Pair>
            <Price>{price}</Price>
        </Card>
    );
}

export default PairResults;