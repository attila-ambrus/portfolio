import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 140rem;
    padding: 0 2.5rem;
    margin: 0 auto;
`

const container = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
} 

export default container;