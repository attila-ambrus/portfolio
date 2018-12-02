import React from "react";
import styled from "styled-components";

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
    transform: translateY(${props => props.pos === 'top' ? '-2px' : props.pos === 'bottom' ? '2px' : 0})
`

const hamburger = () => {
    return (
        <Hamburger>
            <Bar pos = "top"/>
            <Bar />
            <Bar pos = "bottom"/>
        </Hamburger>
    )
}

export default hamburger;