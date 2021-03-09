import styled from 'styled-components';

export const ItemContainer = styled.div`
	display: flex;
    flex-direction: column;
	width: 100%;
	border-bottom: 2px solid var(--primaryTextColor);
	margin-bottom: 24px;
	position: relative;
`;

export const Heading = styled.h3`
	color: white;
	font-weight: 400;
	margin-bottom: 8px;
	line-height: 20px;
	font-weight: 500;
`;

export const Card = styled.div`
	display: flex;
    justify-content: space-between;
	padding: 16px 0;
`;

export const Pair = styled.h4`
	color: white;
`;

export const Price = styled.h4`
	color: white;
`;