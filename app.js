const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      // id, name, price, title
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      return `<!-- single product -->
        <a class="single-product" href="product.html?id=${id}">
            <img src="${img}" class="single-product-img img" alt="${title}">
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${price / 100}</span>
            </footer>
        </a>`;
    })
    .join("");
  productsDOM.innerHTML = `
    <div class="products-container">
        ${productList}
    </div>
  `;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};
start();
