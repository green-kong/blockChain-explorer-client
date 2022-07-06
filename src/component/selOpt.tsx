export const selOpt = (optList: string[]) => {
  return optList.map((v, i) => {
    return (
      <option value={v} key={i}>
        {v}
      </option>
    );
  });
};
