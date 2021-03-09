import React from 'react';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import {Container, ContentContainer, Title, Subtitle} from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <Title>Find the best place to buy cryptocurrency</Title>
                <Subtitle>{`Compare real-time prices and find the cheapest place to buy\nBitcoin, Ethereum, Cardano and more cryptocurrencies`}</Subtitle>
                <SearchForm />
            </ContentContainer>
        </Container>
    )
}

export default Home;