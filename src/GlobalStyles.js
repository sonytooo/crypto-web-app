import { createGlobalStyle } from 'styled-components';
import {darkTransparent, primaryOrange, primaryTextColor} from './constants/colors';

export default createGlobalStyle`
	:root {
		--primaryOrange: ${primaryOrange};
		--primaryTextColor: ${primaryTextColor};
		--darkTransparent: ${darkTransparent};
		--danger10: rgba(255, 103, 140, 0.1);
		--danger20: rgba(255, 103, 140, 0.2);
		--dangerLight: #FFD9E2;
		--danger-dark: #FC0C47;
		--success: #7DE0E0;
		--success-dark: #69C9C9;
		--text-color: #383838; //rgb(56, 56, 56)
		--border-color: rgba(56, 56, 56, .1);
		--shadow: 0 2px 24px rgba(0, 0, 0, .04);
		--transition: .4s;
	}

	*, *:before, *:after {
		box-sizing: border-box;
	}

	body {
		font-family: 'Fira Sans', sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.375;
		color: var(--text-color);
	}

	h1 {
		margin-bottom: 24px;
		font-size: 40px;
		font-weight: 500;
		line-height: 50px;
	}

	h2 {
		font-size: 30px;
		font-weight: 500;
		margin: 0;
	}

	h3 {
		margin-bottom: 16px;
		font-size: 20px;
		font-weight: 500;
		line-height: 1.35;
		margin: 0;
		color: var(--text-color);
	}

	h4 {
		font-size: 16px;
		font-weight: 400;
		margin: 0;
		color: var(--text-color);
		white-space: 'pre-wrap';
	}

	h5 {
		font-size: 14px;
		font-weight: 400;
		margin: 0;
		color: var(--text-color);
		white-space: 'pre-wrap';
	}

	h6 {
		font-size: 12px;
		font-weight: 400;
		margin: 0;
		color: var(--text-color);
		white-space: 'pre-wrap';
	}

	strong {
		font-weight: 500;
	}

	img {
		max-width: 100%;
	}

	a,
	button {
		cursor: pointer;
	}
`;
