import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
  color: dodgerblue;
`;

const StyledSpan = styled.span`
  font-weight: 700;
  color: black;
`;

interface TX {
  hash: string;
}
export const txHashList = (tx: TX[]) => {
  return tx.map((v) => {
    return (
      <Link to={`/ts/${v.hash}`} key={v.hash}>
        <StyledLi>
          <StyledSpan>Hash</StyledSpan>: {v.hash}
        </StyledLi>
      </Link>
    );
  });
};
