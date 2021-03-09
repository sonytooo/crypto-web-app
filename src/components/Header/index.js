import React from 'react';
import {HeaderContainer, LogoWrapper, HeadingSeparator, Heading, NavContainer, NavItem} from './styles';
import Logo from '../../assets/svg/logo.svg';

const Header = () => {
    return (
    <HeaderContainer>
        <LogoWrapper>
            <img src={Logo} alt="logo" width={'48px'} />
        </LogoWrapper>
        <HeadingSeparator />
        <Heading>Crypto price tracker</Heading>
        <NavContainer>
        <NavItem>Partners</NavItem>
        <NavItem>News</NavItem>
        <NavItem>About Us</NavItem>
        </NavContainer>
    </HeaderContainer>
    )
}

export default Header;