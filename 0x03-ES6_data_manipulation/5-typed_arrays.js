const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  if (position > int8Array.length) throw new Error('Position outside range');
  new Int8Array(buffer)[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
