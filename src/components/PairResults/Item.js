import React from 'react';
import {ItemContainer, Heading} from './styles';
import Card from './Card';

const Item = ({exchange, pair, price, index, onPriceClick, error}) => {
    return (
        <ItemContainer>
            <Heading>
                {`${index + 1}. ${exchange}`}
            </Heading>
            <Card pair={pair} price={price} onPriceClick={onPriceClick} error={error} />
        </ItemContainer>
    )
}

export default Item;