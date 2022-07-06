import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IBlock, ITx } from '../../types/type';
import { getBlock } from '../api/block';
import { getTx } from '../api/tx';
import styled from 'styled-components';
import { homeBlockList } from '../utils/homeBlockList';
import { homeTxList } from '../utils/homeTxList';
import socketIOClient from 'socket.io-client';

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 0 80px;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 50px;
`;

const Box = styled.ul`
  width: 45%;
  height: 620px;
  border-radius: 30px;
  border: 3px solid;
  box-sizing: border-box;
  padding: 20px;
`;

const Title = styled.ul`
  width: 100%;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 2px solid;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
`;
const socket = socketIOClient('http://localhost:4000');

export const Index = () => {
  const [blocks, setBlocks] = useState<ReactElement[] | undefined>(undefined);
  const [txs, setTxs] = useState<ReactElement[] | undefined>(undefined);

  useEffect(() => {
    (async function () {
      try {
        const result = (await getBlock()) as IBlock[];
        const newBlockList = homeBlockList(result);
        setBlocks(newBlockList);

        const txResult = (await getTx()) as ITx[];
        const txList = homeTxList(txResult);
        setTxs(txList);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (blocks === undefined || txs === undefined) return;
    socket.on('new Block', ({ newBlock }: { newBlock: IBlock }) => {
      const curBlock = [...blocks];
      const newBlockEl = homeBlockList([newBlock]);
      const newBlockList = [...newBlockEl, ...curBlock].filter((_, i) => {
        return i < 10;
      });
      setBlocks(newBlockList);
    });

    socket.on('new Tx', ({ tx }: { tx: ITx[] }) => {
      const curTx = [...txs];
      const newTxEl = homeTxList(tx);
      const newTxList = [...newTxEl, ...curTx].filter((_, i) => {
        return i < 10;
      });
      setTxs(newTxList);
    });
  }, [blocks, txs]);

  return (
    <div>
      <ContentDiv>
        <Box>
          <li>
            <Title>
              <li>Recent Block</li>
              <li style={{ fontSize: '16px', cursor: 'pointer' }}>
                <Link to={'/block'}>See More...</Link>
              </li>
            </Title>
          </li>
          {blocks}
        </Box>
        <Box>
          <li>
            <Title>
              <li>Recent Transaction</li>
              <li style={{ fontSize: '16px', cursor: 'pointer' }}>
                <Link to={'/transaction'}>See More...</Link>
              </li>
            </Title>
          </li>
          {txs}
        </Box>
      </ContentDiv>
    </div>
  );
};
