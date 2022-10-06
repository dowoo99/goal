import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return <HeaderStyled>Goal</HeaderStyled>;
};
export default Header;
const HeaderStyled = styled.h1`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
