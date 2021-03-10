import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
    background-color: var(--darkTransparent);
    backdrop-filter: blur(6px);
    align-items: center;
`;

export const LogoWrapper = styled.div`
	padding: 12px 24px;
    cursor: pointer;
`;

export const HeadingSeparator = styled.div`
	width: 2px;
    height: 32px;
    background-color: var(--primaryTextColor);
    margin-right: 24px;
    cursor: default;
`;

export const Heading = styled.h4`
	color: var(--primaryTextColor);
    cursor: default;
`;

export const NavContainer = styled.div`
	display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`;

export const NavItem = styled.a`
	color: white;
    padding: 6px 20px;

    &:hover {
        color: var(--primaryOrange);
    }
`;


