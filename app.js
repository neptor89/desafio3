const express = require('express');
const app = express();
const productManager = require('./ProductManager');
//const productManager = new ProductManager();

app.get('/products', (req, res) => {
  const limit = req.query.limit;
  const products = productManager.getProducts();
  if (limit) {
    res.send(products.slice(0, limit));
  } else {
    res.send(products);
  }
});

app.get('/products/:pid', (req, res) => {
  const pid = req.params.pid;
  const product = productManager.getProductById(pid);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});