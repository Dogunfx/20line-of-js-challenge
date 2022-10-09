// this code reverse a string
function reserve(str) {
  var wrd = String(str);
  var newWord = "";
  for (let index = wrd.length; index >= 0; index--) {
    newWord += wrd.charAt(index);
  }
  return newWord;
}

console.log(reserve("This is the new team"));
