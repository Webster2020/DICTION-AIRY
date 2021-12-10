export const convTextToButtons = (text) => {
  const SIGNS = [',', '.', '?', '!', '"', '(', ')'];
  const arr = text.split(' ');
  const convArr = arr.map((el) => {
    for (let i = 0; i < SIGNS.length; i++) {
      if (el.includes(SIGNS[i])) {
        let partOne = el.split('');
        if (el.indexOf(SIGNS[i]) !== 0) {
          partOne.splice(-1, 0, ' ');
        } else {
          partOne.splice(1, 0, ' ');
        }
        const partTwo = partOne.splice(0, partOne.indexOf(' '));
        partOne.splice(0, 1);
        return [partTwo.join(''), partOne.join('')];
      }
    }
    return el;
  });
  return convArr.flat();
};
