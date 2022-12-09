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
      imageSrc: './assets/images/products/happy-socks-big-polka-dots-blue-green-red-white.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: 'Cloud Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/products/happy-socks-blue-cloud.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: 'Cat Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/products/happy-socks-cats-black.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: 'Striped Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/products/happy-socks-stripe-socks.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: 'Banana Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/products/happy-socks-cyan-banana.webp',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: 'Frog Socks',
      price: 40,
      stock: 100,
      imageSrc: './assets/images/products/happy-socks-frogs-black-yellow.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    }
  ]
  productItems.forEach(item => {
    item.id = productItems.indexOf(item) + 1
  })
  localStorage.setItem("products", JSON.stringify(productItems))
} else {
  productItems = JSON.parse(localStorage.getItem('products'))
}