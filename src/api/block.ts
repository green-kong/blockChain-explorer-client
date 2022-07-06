import axios from 'axios';

export const getBlock = async () => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/block/getBlock',
      null
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllBlock = async () => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/block/getAllBlock',
      null
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searchBlock = async (payload: {
  select: string;
  value: string;
}) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/block/searchBlock',
      payload
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getBlockInfo = async (payload: { hash: string }) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/block/getBlockInfo',
      payload
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
