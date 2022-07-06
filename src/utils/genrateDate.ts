export const generateDate = (timestamp: number): string => {
  const newDate = new Date(timestamp * 1000);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  const hour = newDate.getHours();
  const min = newDate.getMinutes();
  const sec = newDate.getSeconds();
  return `${year}년 ${month + 1}월 ${date}일 ${hour}시 ${min}분 ${sec}초`;
};
