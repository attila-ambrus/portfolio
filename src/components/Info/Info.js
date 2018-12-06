import React from "react";
import styled from "styled-components";

import img from "../../images/code-screen.svg";

const ImgBox = styled.div`
    margin: 0 auto;
    width: 68.25%;
`
const Img = styled.img`
    width: 100%;
`

const info = () => {
    return (
        <section>
            <ImgBox>
                <Img src={img} alt="Section info image"/>
            </ImgBox>
        </section>
    )
}

export default info;