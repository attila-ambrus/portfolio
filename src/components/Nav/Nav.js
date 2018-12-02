import React from "react";
import styled from 'styled-components';
import logo from "../../images/Logo-black.svg";
import Hamburger from "../UI/Hamburger/Hamburger";

const Nav = styled.nav`
    height: 7.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoBox = styled.div`
    width: 7.41rem;
    height: 2.665rem;
`
const Logo = styled.img`
    width: 100%;
`

const nav = () => {
    return (
        <Nav>
            <LogoBox>
                <Logo src={logo} alt="AA Logo"/>
            </LogoBox>
            <Hamburger />
        </Nav>
    )
}

export default nav;