const url = "https://course-api.com/javascript-store-single-product";
const productDOM = document.querySelector(".product");

const fetchProduct = async () => {
  productDOM.innerHTML = '<h4 class="product-loading">Loading...</h4>';
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    // console.log(window.location.search);
    const resp = await fetch(`${url}?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    productDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later </p>';
  }
};

const displayProduct = (product) => {
  console.log(product);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
