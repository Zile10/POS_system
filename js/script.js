// localStorage.clear()

let productItems = [
  {
    item: 'Polka Dot Socks',
    price: 40,
    stock: 100,
  },
  {
    item: 'Cat Socks',
    price: 40,
    stock: 100,
  },
  {
    item: 'Striped Socks',
    price: 40,
    stock: 100,
  },
  {
    item: 'Banana Socks',
    price: 40,
    stock: 100,
  },
  {
    item: 'Pumpkin Socks',
    price: 40,
    stock: 100,
  }
]
localStorage.setItem("products", JSON.stringify(productItems))