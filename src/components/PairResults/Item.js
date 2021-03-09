import React from 'react';
import {ItemContainer, Heading} from './styles';
import Card from './Card';

const Item = ({exchange, pair, price, index}) => {
    return (
        <ItemContainer>
            <Heading>
                {`${index + 1}. ${exchange}`}
            </Heading>
            <Card pair={pair} price={price} />
        </ItemContainer>
    )
}

export default Item;