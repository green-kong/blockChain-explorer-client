import { useEffect, useState } from 'react';
import { getAllBlock } from '../api/block';
import { IBlock } from 'type';
import styled from 'styled-components';
import { generateBlockList } from '../utils/allBlockList';
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

export const Block = () => {
  const searchOpts = ['miner', 'number', 'hash'];
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  useEffect(() => {
    (async function () {
      const allBlocks = await getAllBlock();
      setBlocks(allBlocks);
    })();
  }, []);

  return (
    <ContentDiv>
      <TitleDiv>
        <h2>Block List</h2>
        <Search opt={searchOpts} stateChanger={setBlocks} cat="block" />
      </TitleDiv>
      <BlockList>{generateBlockList(blocks)}</BlockList>
    </ContentDiv>
  );
};
