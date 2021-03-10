import styled from 'styled-components';

export const Card = styled.section`
    display: flex;
    justify-content: space-between;
	padding: 8px 0;
`;

export const Text = styled.h4`
    font-weight: ${props => props.isBold ? 500 : 400};
    color: white;
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: ${props => props.position || "flex-start"};
`;