const getRandomCategory = (array) => {
    const randomCate = !array ? null : array[Math.floor(Math.random() * array.length)];
    return randomCate;
  };

  export default getRandomCategory