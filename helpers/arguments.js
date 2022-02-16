const argsLogger = (args) => {
  const [executor, file, ...rest] = args;
  const obj = {};
  rest.forEach((element, index, arr) => {
    if (element.charAt(0) === "-") {
      if (index === arr.length - 1) {
        obj[element.substring(1)] = true;
      } else if (arr[index + 1].charAt(0) !== "-") {
        obj[element.substring(1)] = arr[index + 1];
      } else {
        obj[element.substring(1)] = true;
      }
    }
  });
  return obj;
};

export { argsLogger };
