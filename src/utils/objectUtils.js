const objectSize = (obj) => {
  let count = 0;

  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      count++;
    }
  }

  return count;
};

export default objectSize;
