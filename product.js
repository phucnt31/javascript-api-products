const url = "https://course-api.com/javascript-store-single-product";
const productDOM = document.querySelector(".product");

const fetchProduct = async () => {
  return "product";
};

const displayProduct = (product) => {
  console.log(product);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
