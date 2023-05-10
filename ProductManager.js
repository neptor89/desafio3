class ProductManager {
  constructor() {
    this.products = [],
    this.productsId = 0;
  }
  getProducts() {
    console.log(this.products);
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("error, todos los campos son obligatorios");
    }
    if (this.products.find((product) => product.code === code)) {
      console.log(`el producto con el code ${code} ya exixte`);
    }

    const product = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      id: this.productsId++,
    };

    this.products.push(product);

    console.log(product);
  }

  getProductById(id) {
    if (this.productsId.find((product) => product.id === id)) {
      console.log(`el producto con el id ${id} no se encontro`);

      return;
    }
  }

}

//console.log(this.products);

const productManager = new ProductManager();

productManager.addProduct(
  "Producto 1",
  "Descripción del producto 1",
  10,
  "thumbnail1.jpg",
  "001",
  5
);
productManager.addProduct(
  "Producto 2",
  "Descripción del producto 2",
  20,
  "thumbnail2.jpg",
  "002",
  10
);
productManager.addProduct(
  "Producto 3",
  "Descripción del producto 3",
  30,
  "thumbnail3.jpg",
  "003",
  15
);

//console.log(this.products);

module.exports