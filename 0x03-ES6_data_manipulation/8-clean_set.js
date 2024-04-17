const cleanSet = (set, startString) => {
  if (startString === '' || typeof startString !== 'string') return '';
  
  return [...set]
    .filter(s => typeof s === 'string' && s.startsWith(startString))
    .map(s => s.slice(startString.length))
    .join('-');
};

export default cleanSet;
