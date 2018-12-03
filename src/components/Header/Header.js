import React from 'react';
import styled, { css } from "styled-components";
import gitLogo from "../../images/github-black.svg";
import inLogo from "../../images/linkedin-black.svg";

const Header = styled.header`
    margin-top: 6.25rem;
    text-align: center;
`
const Span = styled.span`
    display: block;
    font-weight: 400;
    ${props => props.main && css`
        font-size: 4rem;
    `}
    ${props => props.sub && css`
        font-size: 3rem;
        margin-top: 2rem;
    `
    }
`
const LogoBox = styled.a`
    height: 6.25rem;
    width: 6.25rem;
    text-decoration: none;
    transition: all .4s ease-out;
    :hover {
        transform: scale(1.25);
    }
`
const Logo = styled.img`
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    width: 18.75rem;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 6.25rem;
`

const header = () => {
    return (
        <Header>
            <h1>
                <Span main>Ambrus Attila</Span>
                <Span sub>Full Stack Web Developer</Span>
            </h1>
            <Wrapper>
                <LogoBox href="http://github.com">
                    <Logo src={gitLogo} alt="Linkedin profile"/>
                </LogoBox>
                <LogoBox href="http://linkedin.com">
                    <Logo src={inLogo} alt="Github profile"/>
                </LogoBox>
            </Wrapper>
        </Header>
    )
}

export default header;