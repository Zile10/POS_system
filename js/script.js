let productItems;


class Product{
  constructor(config) {
    this.itemName = config.itemName
    this.price = config.price
    this.stock = config.stock
    this.imageSrc = config.imageSrc
  }
}

if (!localStorage.getItem("products") || localStorage.getItem("products") == '[]') {
  productItems = [
    {
      itemName: 'Polka Dot Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/happy-socks-big-polka-dots-blue-green-red-white.jpg'
    },
    {
      itemName: 'Cloud Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/happy-socks-blue-cloud.jpg'
    },
    {
      itemName: 'Cat Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/happy-socks-cats-black.jpg'
    },
    {
      itemName: 'Striped Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/happy-socks-stripe-socks.jpg'
    },
    {
      itemName: 'Banana Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/happy-socks-cyan-banana.webp'
    },
    {
      itemName: 'Frog Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/happy-socks-frogs-black-yellow.jpg'
    }
  ]
  productItems.forEach(item => {
    item.id = productItems.indexOf(item) + 1
  })
  localStorage.setItem("products", JSON.stringify(productItems))
} else {
  productItems = JSON.parse(localStorage.getItem('products'))
}