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
	background-image: linear-gradient(black,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0.4) 10%,rgba(0,0,0,0.6)), url(${bgImage});
`;

export const ContentContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	padding-top: 40px;
`;

export const Title = styled.h1`
	color: white;
	text-align: center;
`;

export const Subtitle = styled.h3`
	color: white;
	line-height: 30px;
	text-align: center;
	margin-bottom: 60px;
	white-space: pre-line;
`;



