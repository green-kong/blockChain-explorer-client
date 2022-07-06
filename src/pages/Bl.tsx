import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlockInfo } from '../api/block';
import styled from 'styled-components';
import { IBlock, ITx } from '../../types/type';
import { generateDate } from '../utils/genrateDate';
import { txHashList } from '../utils/txHashList';

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

interface TX {
  hash: string;
}

export const Bl = () => {
  const [block, setBlock] = useState<IBlock | undefined>();
  const [tx, setTx] = useState<TX[]>([]);
  const [seeTx, setSeeTx] = useState<Boolean>(false);
  const { hash } = useParams();

  useEffect(() => {
    if (hash === undefined) return;
    (async function () {
      const block = await getBlockInfo({ hash });
      setBlock(block);
      setTx(block.txs);
    })();
  }, [hash]);

  const transactionSeeMore = () => {
    setSeeTx(!seeTx);
  };

  return (
    <StyledDiv>
      <h2>Block Info</h2>
      <StyledUl>
        <StyledLi>
          <StyledSpan>Block Number</StyledSpan> : {block && block.number}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Block Hash</StyledSpan> : {block && block.hash}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Parent Hash</StyledSpan> : {block && block.parentHash}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Time Stamp</StyledSpan> :{' '}
          {block && generateDate(block.timestamp)}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Difficulty</StyledSpan> : {block && block.difficulty}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Nonce</StyledSpan> : {block && block.nonce}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Miner</StyledSpan> : {block && block.miner}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Size</StyledSpan> : {block && block.size}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Gas Used</StyledSpan> : {block && block.gasUsed}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Gas Limit</StyledSpan> : {block && block.gasLimit}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Base Fee Per Gas</StyledSpan> :{' '}
          {block ? block.baseFeePerGas === null && 0 : 'null'}
        </StyledLi>
        <StyledLi>
          <StyledSpan>Transaction</StyledSpan> : {tx.length}
        </StyledLi>
        <TransactionBtn onClick={transactionSeeMore}>
          👇 Transaction 👇
        </TransactionBtn>
        {seeTx && block && txHashList(tx)}
      </StyledUl>
    </StyledDiv>
  );
};
// extraData: '0xd983010a14846765746888676f312e31372e388664617277696e';
// mixHash: '0x477516cc6e185d8dd87916d74f00555bcabfa19230cc2ea1bae15dea9beb2914';
// sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
// stateRoot: '0x893eed7977bb291e18abf738b11c1956ab53521b771aad2c97ecd7be1a363f38';
// transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
