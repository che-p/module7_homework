function getO(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ ${key}, значение ${obj[key]}`);
    }
  }
}

objTest = {
  x: 1,
  y: 2,
  z: "qqq",
};

getO(objTest);
