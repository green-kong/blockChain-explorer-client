import { useEffect, useState } from 'react';
import { getAllTx } from '../api/tx';
import { ITx } from 'type';
import styled from 'styled-components';
import { generateTxList } from '../utils/allTxList';
import { Search } from '../component/search';

const ContentDiv = styled.div`
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  margin-bottom: 50px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
`;

const BlockList = styled.ul`
  margin-top: 20px;
`;

export const Transaction = () => {
  const searchOpts = ['hash', 'account', 'blockHash', 'blockNumber'];
  const [txs, setTxs] = useState<ITx[]>([]);
  useEffect(() => {
    (async function () {
      const allTx = await getAllTx();
      setTxs(allTx);
    })();
  }, []);

  return (
    <ContentDiv>
      <TitleDiv>
        <h2>Transaction List</h2>
        <Search opt={searchOpts} stateChanger={setTxs} cat="tx" />
      </TitleDiv>
      <BlockList>{generateTxList(txs)}</BlockList>
    </ContentDiv>
  );
};
