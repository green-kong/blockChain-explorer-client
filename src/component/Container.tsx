import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const Container = ({ children }: React.PropsWithChildren) => {
  return <Frame>{children}</Frame>;
};
