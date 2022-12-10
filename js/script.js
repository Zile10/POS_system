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
      itemName: "men's cotton tshirt blue",
      price: 199,
      stock: 100,
      color: 'blue',
      gender: 'male',
      imageSrc: 'https://i.postimg.cc/ncCCNvGM/mens-cotton-tshirt-blue.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "men's cotton tshirt white",
      price: 199,
      stock: 100,
      color: 'white', 
      gender: 'male',
      imageSrc: 'https://i.postimg.cc/rFmrM6MV/mens-cotton-tshirt-white.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "men's leather jacket black",
      price: 2699,
      stock: 100,
      color: 'black',
      gender: 'male',
      imageSrc: 'https://i.postimg.cc/pTRmS4st/mens-leather-jacket-black.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "men's leather jacket brown",
      price: 2499,
      stock: 100,
      color: 'brown',
      gender: 'male',
      imageSrc: 'https://i.postimg.cc/FRpYXp6k/mens-leather-jacket-brown.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "women's denim top blue",
      price: 129,
      stock: 100,
      color: 'blue',
      gender: 'female',
      imageSrc: 'https://i.postimg.cc/8P0rCyzh/womens-denim-top-blue.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "women's leather jacket black",
      price: 2699,
      stock: 100,
      color: 'black',
      gender: 'female',
      imageSrc: 'https://i.postimg.cc/SK026J8R/womens-leather-jacket-black.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "women's leather jacket brown",
      price: 2699,
      stock: 100,
      color: 'brown',
      gender: 'female',
      imageSrc: 'https://i.postimg.cc/MGycdqbD/womens-leather-jacket-brown.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "men's cotton trousers cream",
      price: 599,
      stock: 100,
      color: 'white',
      gender: 'male',
      imageSrc: 'https://i.postimg.cc/wxW1WWJS/mens-cotton-trousers-cream.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "men's cotton trousers tan",
      price: 599,
      stock: 100,
      color: 'brown',
      gender: 'male',
      imageSrc: 'https://i.postimg.cc/RhbqNF4M/mens-cotton-trousers-tan.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "men's track pants grey",
      price: 199,
      stock: 100,
      color: 'grey',
      gender: 'male',
      imageSrc: 'https://i.postimg.cc/RZJJJcW2/mens-track-pants-grey.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "women's palazzo pants azure",
      price: 479,
      stock: 100,
      color: 'blue',
      gender: 'female',
      imageSrc: 'https://i.postimg.cc/HnLVY5GZ/womens-palazzo-pants-azure.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
    {
      itemName: "women's track pants black",
      price: 249,
      stock: 100,
      color: 'black',
      gender: 'female',
      imageSrc: 'https://i.postimg.cc/vH9mLxgC/womens-track-pants-black.jpg',
      description: `These comfortable socks from 'Happy Socks', are guaranteed to keep your feet satisfied.`
    },
  ]
  productItems.forEach(item => {
    item.id = productItems.indexOf(item) + 1
  })
  localStorage.setItem("products", JSON.stringify(productItems))
} else {
  productItems = JSON.parse(localStorage.getItem('products'))
}