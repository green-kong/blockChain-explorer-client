import { selOpt } from './selOpt';
import styled from 'styled-components';
import { useState } from 'react';
import { IBlock, ITx } from 'type';
import { searchBlock } from '../api/block';
import { searchTx } from '../api/tx';

interface SearchProps {
  opt: string[];
  stateChanger:
    | React.Dispatch<React.SetStateAction<IBlock[]>>
    | React.Dispatch<React.SetStateAction<ITx[]>>;
  cat: string;
}

const StyledForm = styled.form`
  width: 400px;
  border: 2px solid;
  height: 40px;
  border-radius: 20px;
  display: flex;
  padding: 3px 20px;
  box-sizing: border-box;
`;

const StyledSelect = styled.select`
  border: none;
  :focus {
    outline: none;
  }
`;

const StyledInput = styled.input`
  width: 210px;
  border: none;
  padding: 0 5px;
  :focus {
    outline: none;
  }
`;

const StyledBtn = styled.button`
  border: none;
  background-color: #fff;
  margin-left: 5px;
  cursor: pointer;
`;

export const Search = ({ opt, stateChanger, cat }: SearchProps) => {
  const [select, setSelect] = useState<string>(opt[0]);
  const [value, setValue] = useState<string>('');

  const optionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = { select, value };
    const result =
      cat === 'block' ? await searchBlock(payload) : await searchTx(payload);

    stateChanger(result);
  };

  return (
    <StyledForm onSubmit={searchHandler}>
      <StyledSelect onChange={optionChangeHandler}>{selOpt(opt)}</StyledSelect>
      <StyledInput type="text" onChange={inputChangeHandler} />
      <StyledBtn type="submit">검색</StyledBtn>
    </StyledForm>
  );
};
