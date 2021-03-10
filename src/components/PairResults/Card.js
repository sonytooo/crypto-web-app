import React from 'react';
import {Card, Pair, Price, ErrorMessage} from './styles';

const PairResults = ({pair, price, onPriceClick, error}) => {
    if (error) {
        return (
            <Card>
                <ErrorMessage>{`* ${error}`}</ErrorMessage>
            </Card>
        )
    }

    return (
        <Card>
            <Pair>{pair}</Pair>
            <Price onClick={onPriceClick}>{price}</Price>
        </Card>
    );
}

export default PairResults;