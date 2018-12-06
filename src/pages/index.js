import React from 'react'

import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Layout from '../components/layout';
import Container from "../components/Container/Container";
import Nav from '../components/Nav/Nav';
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Container>
        <Nav />
        <Header />
      </Container>
      <Info />
    </Layout>
  </>
)

export default IndexPage
