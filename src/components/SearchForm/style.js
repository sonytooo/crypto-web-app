import styled from 'styled-components';

export const FormContainer = styled.section`
    background-color: var(--darkTransparent);
    backdrop-filter: blur(7px);
	display: flex;
	flex-direction: column;
    padding: 24px 32px;
    border-radius: 24px;
    align-items: center;
    margin-bottom: 40px;
`;

export const Heading = styled.h3`
    color: var(--primaryTextColor);
    margin-bottom: 18px;
    text-align: center;
`;

export const InputsWrapper = styled.div`
    display: flex;
    padding-bottom: 40px;
`;

export const InputsSeparator = styled.h1`
    max-height: 58px;
    line-height: 58px;
    margin: 0;
    font-weight: 300;
    padding: 0 18px;
    color: var(--primaryTextColor);
`;

export const Input = styled.input`
    width: 128px;
    height: 58px;
    background-color: rgba(28, 28, 28, 0.9);
    outline: none;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-weight: 400;
    color: var(--primaryTextColor);
    text-align: center;
    text-transform: uppercase;
    padding: 0 8px;
    font-weight: 500;

    &::placeholder {
        text-transform: none;
        color: rgb(52, 52, 52);
    }
`;

export const ValidationMessage = styled.h5`
    color: red;
    align-self: flex-start;
    line-height: 0;
    transform: translateY(-22px);
`;




