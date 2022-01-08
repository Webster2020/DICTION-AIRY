export const getFilteredWords = (objs, filterData) => objs.filter((obj) => {
  let cond = 0;
  for (let keys in filterData) {
    if (filterData[keys] !== obj[keys]) {return cond++;}
  }
  return !cond && obj;
});
