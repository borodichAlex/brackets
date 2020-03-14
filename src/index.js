module.exports = function check(str, Config) {
  const bracketsConfig = Config.map(item => item.concat())

  //count
  for (let arr of bracketsConfig) {
    arr.push(0); //count
  }

  let num = [];

  for (let ch of str) {
    let lengthConfig = bracketsConfig.length;

    for (let i = 0; i < lengthConfig; i++) {
      let subArr = bracketsConfig[i];
      let openCh = subArr[0];
      let closeCh = subArr[1];
      let count = subArr[2];
      let lenNum = num.length - 1;

      if (ch !== openCh && ch !== closeCh) {
        continue;
      }

      if (ch === openCh && ch !== closeCh) {
        num.push(closeCh)
        break;
      }

      if (ch === openCh && ch === closeCh && count === 0) {
        num.push(ch)
        subArr.splice(2, 1, count + 1)
        break;
      }

      if (ch === closeCh && ch !== num[lenNum]) return false

      if (ch === openCh && ch === closeCh && count > 0) {
        num.pop(ch)
        subArr.splice(2, 1, 0)
        break;
      }

      if (ch === closeCh && ch === num[lenNum]) {
        num.pop();
        break;
      }

    }

  }

  return !num.length
}