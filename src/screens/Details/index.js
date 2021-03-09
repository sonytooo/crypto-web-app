import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { setPair } from '../../store/actions/common';
import { Container, Heading, HeadingContainer, ListContainer, BackIconWrapper, SortButtonWrapper, SortButton, SortButtonArrow } from './styles';
import { getPairPrices } from '../../store/actions/common';
import LoadingIndicator from '../../components/Loading';
import Item from '../../components/PairResults/Item';
import BackArrow from '../../assets/svg/back-arrow.svg';

const Details = () => {
    const prices = useSelector((state) => state.prices.prices);
    const isLoading = useSelector((state) => state.prices.loading);
    const pair = useSelector((state) => state.prices.symbol);
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const [isAsc, setIsAsc] = useState(true); 

    useEffect(() => {
        dispatch(setPair(params.pair.replace(/-|_/gi, '/')));
        dispatch(getPairPrices(params.pair.replace(/-|_/gi, '').toUpperCase()));
    }, [])

    const compare = (a, b) => {
        a = Number(a) || null;
        b = Number(b) || null;

        if (!a && b) {
            return 1;
        } else if (a && !b) {
            return -1;
        } else if (!a && !b) {
            return 0;
        }

        return isAsc ? a - b : b - a;

    }

    const sortedPrices = (prices) => {
        return prices.sort((a, b) => compare(a.price, b.price));
    }

    const toggleSort = () => {
        setIsAsc(!isAsc);
    }

    const render = () => {
        if (isLoading || !prices.length) {
            return (
                <LoadingIndicator />
            )
        } 
        return (
            <ListContainer>
                <HeadingContainer style={{ display: 'flex', alignItems: 'center' }}>
                <BackIconWrapper>
                    <img style={{ cursor: 'pointer' }} src={BackArrow} alt="back-arrow" width={'24px'} />
                </BackIconWrapper>
                <Heading>Search Results</Heading>
                <SortButtonWrapper>
                    <SortButton onClick={toggleSort}>
                        Price  
                        <SortButtonArrow rotate={!isAsc}>
                            {String.fromCharCode(9650)}
                        </SortButtonArrow>
                    </SortButton>
                </SortButtonWrapper>
                </HeadingContainer>
                {sortedPrices(prices).map((el, index) => (
                    <Item 
                        key={el.exchange} 
                        exchange={el.exchange} 
                        price={el.price} 
                        pair={pair} 
                        index={index} 
                    />
                ))}
            </ListContainer>
        )
    }


    return (
        <Container>
            {render()}
        </Container>
    )
}

export default Details;