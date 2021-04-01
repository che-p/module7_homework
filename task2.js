function getO(str, obj) {
  let result = false;
  for (let key in obj) {
    if (key === str) {
      result = true;
    }
  }
  return result;
}

objTest = {
  x: 1,
  y: 2,
  z: "qqq",
};

strTest = "x";

console.log(getO(strTest, objTest));
