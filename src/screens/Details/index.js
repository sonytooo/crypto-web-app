import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { setPair } from '../../store/actions/common';
import { Container, Heading, HeadingContainer, CenteringWrapper, ListContainer, BackIconWrapper, SortButtonWrapper, SortButton, SortButtonArrow, ModalCloseIcon } from './styles';
import { getPairPrices } from '../../store/actions/common';
import LoadingIndicator from '../../components/Loading';
import Item from '../../components/PairResults/Item';
import BackArrow from '../../assets/svg/back-arrow.svg';
import Header from '../../components/Header';
import { BINIANCE, BITFINEX, HUOBI, KRAKEN } from '../../constants/common';
import { getHuobiPairTrades } from '../../store/actions/huobi';
import { getBinancePairTrades } from '../../store/actions/binance';
import { getKrakenPairTrades } from '../../store/actions/kraken';
import TradesModal from '../../components/TradesModal';

const Details = () => {
    const prices = useSelector((state) => state.prices.prices);
    const isLoading = useSelector((state) => state.prices.loading);
    const pair = useSelector((state) => state.prices.symbol);
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const [isAsc, setIsAsc] = useState(true);
    const [openTrades, setOpenTrades] = useState(null);

    useEffect(() => {
        if (params.pair && params.pair.length) {
            dispatch(setPair(params.pair.replace(/-|_/gi, '/')));
            dispatch(getPairPrices(params.pair.replace(/-|_/gi, '').toUpperCase()));
        } else {
            history.push('/');
        }
    }, [])

    const compare = (a, b) => {
        a = Number(a) || null;
        b = Number(b) || null;

        if (!a && b) return 1;
        else if (a && !b) return -1;
        else if (!a && !b) return 0;

        return isAsc ? a - b : b - a;

    }

    const sortedPrices = (prices) => {
        return prices.sort((a, b) => compare(a.price, b.price));
    }

    const toggleSort = () => {
        setIsAsc(!isAsc);
    }

    const onBackToHome = () => {
        history.push('/');
    }

    const onPriceClick = (exchange) => {
        const pair = params.pair.replace(/-|_/gi, '');
        exchange === HUOBI && dispatch(getHuobiPairTrades(pair));
        exchange === BINIANCE && dispatch(getBinancePairTrades(pair));
        exchange === BITFINEX && dispatch(getBinancePairTrades(pair));
        exchange === KRAKEN && dispatch(getKrakenPairTrades(pair));
        setOpenTrades(exchange);
    }

    const closeModal = () => {
        setOpenTrades(null);
    }

    const afterOpenModal = () => {

    }

    const render = () => {
        if (isLoading || !prices.length) {
            return (
                <CenteringWrapper>
                    <LoadingIndicator />
                </CenteringWrapper>
            )
        } 
        return (
            <CenteringWrapper>
                <ListContainer>
                    <HeadingContainer style={{ display: 'flex', alignItems: 'center' }}>
                    <BackIconWrapper>
                        <img 
                            style={{ cursor: 'pointer' }} 
                            src={BackArrow} alt="back-arrow" 
                            width={'24px'}
                            onClick={onBackToHome}
                        />
                    </BackIconWrapper>
                    <Heading>Search Results</Heading>
                    <SortButtonWrapper>
                        <SortButton onClick={toggleSort}>
                            Price  
                            <SortButtonArrow shouldRotate={!isAsc}>
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
                            error={el.error}
                            index={index}
                            onPriceClick={() => onPriceClick(el.exchange)}
                        />
                    ))}
                </ListContainer>
            </CenteringWrapper>
        )
    }


    return (
        <Container>
            <Header />
            {render()}
            <TradesModal
                openTrades={openTrades}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
            />
        </Container>
    )
}

export default Details;