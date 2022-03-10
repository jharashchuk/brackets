module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 != 0) return false;

  let arr = [];
  let obj = Object.fromEntries(bracketsConfig);

  for (let elem of str.split('')) {
    if (obj[arr[arr.length-1]] === elem) {
      arr.pop(); 
      } else if (Object.keys(obj).includes(elem)){ 
        arr.push(elem); 
      }
  }
    return arr.length === 0;
};
