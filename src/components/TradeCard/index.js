import React from 'react';
import {Card, Text} from './styles';

const TradeCard = ({time, size, price, type}) => {
    return (
        <Card>
            <Text>{time}</Text>
            <Text position="center">{size}</Text>
            <Text position="flex-end">{price}</Text>
        </Card>
    )
}

export default TradeCard;