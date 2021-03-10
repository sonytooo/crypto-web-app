import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PrimaryButton from '../Buttons/PrimaryButton';
import {FormContainer, Heading, InputsWrapper, Input, InputsSeparator, ValidationMessage} from './style';

const SearchForm = () => {
    const history = useHistory();
    const params = useParams();
    const [firstSymbol, setFirstSymbol] = useState('');
    const [secondSymbol, setSecondSymbol] = useState('');
    const [validationMessage, setValidationMessage] = useState(null);

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
        if (params.pair && params.pair.length) {
            history.push(`/${params.pair.toUpperCase()}/details`);
        }
    }, [])

    useEffect(() => {
        if (firstSymbol.length || secondSymbol.length) {
            history.replace(
                `/${firstSymbol.toUpperCase()}${firstSymbol.length && secondSymbol.length ? '_' : ''}${secondSymbol.toUpperCase()}`
            );
        }
    }, [firstSymbol, secondSymbol])

    const onSubmit = () => {
        if (firstSymbol.length && secondSymbol) {
            history.push(`/${firstSymbol}_${secondSymbol}/details`);
        } else {
            setValidationMessage('* Both field are required.');
        }
    }

    return (
        <FormContainer>
            <Heading>Search for any crypto pair</Heading>
            <InputsWrapper>
                <Input placeholder="e.g. BTC" onChange={onChangeFirstInput} value={firstSymbol} />
                <InputsSeparator>/</InputsSeparator>
                <Input placeholder="e.g. USDT" onChange={onChangeSecondInput} value={secondSymbol} />
            </InputsWrapper>
            {!!validationMessage && <ValidationMessage>{validationMessage}</ValidationMessage>}
            <PrimaryButton text="Search" onClick={onSubmit} />
        </FormContainer>
    )
}

export default SearchForm;