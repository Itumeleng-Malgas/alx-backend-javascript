const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  new Int8Array(buffer)[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
