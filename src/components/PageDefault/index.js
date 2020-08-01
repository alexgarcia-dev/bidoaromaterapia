import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 3%;
`;

function PageDefault(props) {
  return (
    <>
      <Menu />
        <Main>
          {props.children}
        </Main>
      <Footer />
    </>
  )
}

export default PageDefault;