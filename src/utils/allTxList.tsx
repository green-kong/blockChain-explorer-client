import { ITx } from 'type';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlockContent = styled.li`
  border: 3px solid black;
  border-radius: 7px;
  padding: 5px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const UpperContent = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

const InsideBlock = styled.ul`
  width: 48%;
`;

const StyledLi = styled.li`
  margin-bottom: 3px;
`;

const WeightSpan = styled.span`
  font-weight: 700;
`;

export const generateTxList = (blockList: ITx[]) => {
  return blockList.map((v) => {
    return (
      <Link to={`/ts/${v.hash}`} key={v.id}>
        <BlockContent key={v.id}>
          <UpperContent>
            <InsideBlock>
              <StyledLi>
                <WeightSpan>from</WeightSpan> : {v.from}
              </StyledLi>
              <StyledLi>
                <WeightSpan>to</WeightSpan> : {v.to}
              </StyledLi>
              <StyledLi>
                <WeightSpan>value</WeightSpan> :{' '}
                {`${Number(v.value) / 10 ** 18} KONG`}
              </StyledLi>
            </InsideBlock>
          </UpperContent>
          <ul>
            <StyledLi>
              <WeightSpan>Hash</WeightSpan> : {v.hash}
            </StyledLi>
          </ul>
        </BlockContent>
      </Link>
    );
  });
};
