import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTxInfo } from '../api/tx';
import styled from 'styled-components';
import { ITx } from 'type';
import { generateDate } from '../utils/genrateDate';

const StyledDiv = styled.div`
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

const StyledUl = styled.ul`
  border: 3px solid;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 15px;
`;

const StyledLi = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
`;

const StyledSpan = styled.span`
  font-weight: 700;
`;

const TransactionBtn = styled.div`
  width: 100%;
  text-align: center;
  font-size: 23px;
  cursor: pointer;
  color: blue;
  transition: all 300ms;
  margin-bottom: 20px;
  :hover {
    transform: scale(1.2);
  }
`;

export const Ts = () => {
  const [tx, setTx] = useState<ITx | undefined>();
  const { hash } = useParams();

  useEffect(() => {
    if (hash === undefined) return;
    (async function () {
      const result = await getTxInfo({ hash });
      setTx(result);
    })();
  }, [hash]);

  return (
    <StyledDiv>
      <h2>Transaction Info</h2>
      <StyledUl>
        <StyledLi>
          <StyledSpan>Hash</StyledSpan> : {tx && tx.hash}
        </StyledLi>
        <StyledLi>
          <StyledSpan>From</StyledSpan> : {tx && tx.from}
        </StyledLi>
        <StyledLi>
          <StyledSpan>To</StyledSpan> : {tx && tx.to}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Value</StyledSpan> : {tx && Number(tx.value) / 10 ** 18}{' '}
          KONG
        </StyledLi>
        <StyledLi>
          <StyledSpan>Time Stamp</StyledSpan> :{' '}
          {tx && generateDate(tx.timestamp)}
        </StyledLi>
        <Link to={`/bl/${tx?.blockHash}`}>
          <StyledLi style={{ color: 'dodgerblue' }}>
            <StyledSpan style={{ color: 'black' }}>Block Hash</StyledSpan> :{' '}
            {tx && tx.blockHash}
          </StyledLi>
        </Link>
        <StyledLi>
          <StyledSpan>Gas</StyledSpan> : {tx && tx.gas}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Gas Price</StyledSpan> : {tx && tx.gasPrice}
        </StyledLi>
      </StyledUl>
    </StyledDiv>
  );
};
// blockHash: '0x7f7677dedfa0aa6d601e5a16d83b1dcbe9acaa7a26743fe6ebfbfd10c592b3db';
// blockId: 1;
// blockNumber: 417;
// from: '0x6C29c004D94E10891607767B4A2cAcAAaAE7D0aa';
// gas: 21000;
// gasPrice: 1000000000;
// hash: '0x387e2b3ec5605f592d1433c666378b2aa6ece8b3b53aa41a069ddae4f49166ae';
// id: 1;
// input: '0x';
// nonce: 163;
// timestamp: 1657074111;
// to: '0xDB381947E854d07594EdE1d6A1bb3dc5D75F9547';
// type: 0;
// value: '1000000000000000000';
