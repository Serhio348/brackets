module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map((i) => i.join(""));
  
  for (let i = 0; i < brackets.length; i++) {
    if (str.includes(brackets[i])) {
      str = str.replaceAll(brackets[i], "");
      i = -1;
    }
  }
  return str.length === 0 ? true : false;
}
