import { Link } from 'react-router-dom';
import { ITx } from '../../types/type';

export const homeTxList = (txList: ITx[]): JSX.Element[] => {
  const newTxList = txList.map((v, i) => {
    return (
      <Link to={`/ts/${v.hash}`} key={v.hash}>
        <li
          key={v.hash}
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
            <li
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontWeight: '700' }}>Tx Hash</span>: {v.hash}
            </li>
            <li>
              {' '}
              <span style={{ fontWeight: '700' }}>From</span>: {v.from}
            </li>
          </ul>
        </li>
      </Link>
    );
  });

  return newTxList;
};
