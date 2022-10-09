function reserve(str) {
  var wrd = String(str);
  if (wrd.length == 0) {
    return "";
  }
  return wrd.charAt(wrd.length - 1) + reserve(wrd.substring(0, wrd.length - 1));
}

console.log(reserve("Hello"));
