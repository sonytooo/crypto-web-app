import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getPairPrices } from '../../store/actions/common';
import PrimaryButton from '../Buttons/PrimaryButton';
import {FormContainer, Heading, InputsWrapper, Input, InputsSeparator} from './style';

const SearchForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [firstSymbol, setFirstSymbol] = useState('');
    const [secondSymbol, setSecondSymbol] = useState('');

    const onChangeFirstInput = (e) => {
        e.preventDefault();
        setFirstSymbol(e.target.value.toUpperCase());
        if (!e.target.value.length && !secondSymbol.length) {
            history.replace(`/`);
        }
    }

    const onChangeSecondInput = (e) => {
        e.preventDefault();
        setSecondSymbol(e.target.value.toUpperCase());
        if (!e.target.value.length && !firstSymbol.length) {
            history.replace(`/`);
        }
    }

    useEffect(() => {
        if (firstSymbol.length || secondSymbol.length) {
            history.replace(`/${firstSymbol.toUpperCase()}${secondSymbol.toUpperCase()}`);
        }
    }, [firstSymbol, secondSymbol])

    const onSubmit = () => {
        dispatch(getPairPrices(`${firstSymbol}${secondSymbol}`));
        history.push(`/${firstSymbol}${secondSymbol}/details`);
    }

    return (
        <FormContainer>
            <Heading>Search for any crypto pair</Heading>
            <InputsWrapper>
                <Input placeholder="e.g. BTC" onChange={onChangeFirstInput} value={firstSymbol} />
                <InputsSeparator>/</InputsSeparator>
                <Input placeholder="e.g. USDT" onChange={onChangeSecondInput} value={secondSymbol} />
            </InputsWrapper>
            <PrimaryButton text="Search" onClick={onSubmit} />
        </FormContainer>
    )
}

export default SearchForm;