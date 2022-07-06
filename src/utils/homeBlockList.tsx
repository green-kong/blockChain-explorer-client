import { IBlock } from '../../types/type';
import { Link } from 'react-router-dom';

export const homeBlockList = (blockList: IBlock[]): JSX.Element[] => {
  const newBlockList = blockList.map((v, i) => {
    return (
      <Link to={`/bl/${v.hash}`} key={v.number}>
        <li
          key={v.number}
          style={{
            marginBottom: '6px',
            border: '2px solid #444',
            fontSize: '14px',
            borderRadius: '5px',
            cursor: 'pointer',
            padding: '5px',
            boxSizing: 'border-box',
          }}
        >
          <ul>
            <li>
              <span style={{ fontWeight: '700' }}>Number</span>: {v.number}
            </li>
            <li>
              {' '}
              <span style={{ fontWeight: '700' }}>Miner</span>: {v.miner}
            </li>
          </ul>
        </li>
      </Link>
    );
  });

  return newBlockList;
};
