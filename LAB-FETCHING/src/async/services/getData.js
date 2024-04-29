( async () => {

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomProductId = getRandomInt(1, 101);

  (async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${randomProductId}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al obtener los datos del producto:', error);
    }
  })();

})();