import axios from 'axios';

export const getTx = async () => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/tx/getTx',
      null
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searchTx = async (payload: { select: string; value: string }) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/tx/searchTx',
      payload
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllTx = async () => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/tx/getAllTx',
      null
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getTxInfo = async (payload: { hash: string }) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/tx/getTxInfo',
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
