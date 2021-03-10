import React from 'react';
import {Card, Text} from './styles';

const TradeCard = ({time, size, price, type}) => {
    const setPriceColor = (type) => {
        if (type === 'sell') {
            return 'red';
        } else if (type === 'buy') {
            return 'green';
        }
        return 'white';
    }
    return (
        <Card>
            <Text>{time}</Text>
            <Text position="center">{Number(size).toFixed(4)}</Text>
            <Text position="flex-end" color={setPriceColor(type)}>{price}</Text>
        </Card>
    )
}

export default TradeCard;