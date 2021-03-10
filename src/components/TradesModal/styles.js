import styled from 'styled-components';

export const ModalCloseIcon = styled.img`
    cursor: pointer;
    position: absolute;
    right: 32px;
    top: 32px;
`;

export const Heading = styled.h3`
    color: var(--primaryTextColor);
    text-align: center;
    line-height: 24px;
`;

export const CenteringWrapper = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const ColLabelsContainer = styled.div`
	display: flex;
    padding: 32px 0 8px 0;
    border-bottom: 2px solid var(--primaryTextColor);
    margin-bottom: 8px;
`;

export const Label = styled.h4`
	color: white;
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: ${props => props.position || "flex-start"};
`;

export const TradesList = styled.div`
	display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
    margin: 0 -16px;
    padding: 0 16px;
`;