import React from "react";
import styled, { css } from "styled-components";

const Hamburger = styled.div`
    height: 100%;
    width: 3.125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Bar = styled.div`
    width: 3.125rem;
    height: 3px;
    background-color: #232528;
    border-radius: 100px;
    ${props => props.top && css`
        transform: translateY(-2px);
    `}
    ${props => props.bottom && css`
        transform: translateY(2px);
    `}
`

const hamburger = () => {
    return (
        <Hamburger>
            <Bar top/>
            <Bar />
            <Bar bottom/>
        </Hamburger>
    )
}

export default hamburger;