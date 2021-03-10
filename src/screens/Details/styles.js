import styled from 'styled-components';
import bgImage from '../../assets/images/bg-image.jpg';

export const Container = styled.section`
	overflow-y: auto;
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	flex: 1;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: linear-gradient(black,rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6)), url(${bgImage});
`;

export const CenteringWrapper = styled.div`
	display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ListContainer = styled.div`
    background-color: var(--darkTransparent);
    backdrop-filter: blur(7px);
	display: flex;
	flex-direction: column;
    padding: 28px 32px 16px 32px;
    border-radius: 24px;
    margin-bottom: 40px;
    width: 500px;
`;

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 38px;
    align-items: center;
`;

export const BackIconWrapper = styled.div`
    display: flex;
    flex: 1;
`;

export const SortButtonWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

export const SortButton = styled.div`
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
`;

export const SortButtonArrow = styled.span`
    font-size: 12px;
    line-height: 10px;
    padding: 0 2px;
    color: white;
    transform: ${props => !!props.shouldRotate ? 'rotate(180deg)' : undefined};
`;

export const Heading = styled.h3`
	color: var(--primaryTextColor);
    text-align: center;
    justify-self: center;
    align-self: center;
`;

export const ModalCloseIcon = styled.img`
	align-self: flex-end;
`;


