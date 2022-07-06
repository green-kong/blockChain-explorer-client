export interface IBlock {
  id: number;
  parentHash: string;
  sha3Uncles: string;
  miner: string;
  stateRoot: string;
  transactionRoot: string;
  difficulty: string;
  number: number;
  gasLimit: number;
  gasUsed: number;
  timestamp: number;
  extraData: string;
  mixHash: string;
  nonce: string;
  baseFeePerGas: number;
  hash: string;
  size: string;
  transactions?: ITx[];
}

export interface ITx {
  id: number;
  blockHash: string;
  blockNumber: number;
  from: string;
  gas: number;
  gasPrice: number;
  hash: string;
  input: string;
  nonce: number;
  to: string;
  value: string;
  type: number;
  timestamp: number;
}

export interface IHome {
  blocks: IBlock[];
  txs: ITx[];
}

export type Success<D> = {
  isError: false;
  data: D;
};

export type Fail<E> = {
  isError: true;
  error: E;
};

export type Failable<D, E> = Success<D> | Fail<E>;
