const productsContainer = document.querySelector('.products-grid');
const priceRange = document.querySelector('#price-range')
const baseColor = document.querySelector('#base-color')
const gender = document.querySelector('#gender')

let products = JSON.parse(localStorage.getItem('products'))

let checkoutList = JSON.parse(localStorage.getItem('checkout list')) || [];
localStorage.setItem('checkout list', JSON.stringify(checkoutList));

loadProductCards(products)
function loadProductCards(filteredProducts) {
    console.log('products');
    
    // products = JSON.parse(localStorage.getItem('products'))

    productsContainer.innerHTML = ''
    filteredProducts.forEach(product => {
        //<p class="card-text">${product.description}</p>
        productsContainer.innerHTML += `
        <div class="card bg-light text-dark rounded-0" style="width: 18rem;">
            <img src="${product.imageSrc}" class="card-img-top" alt="${product.itemName}">
            <div class="card-body">
                <h5 class="card-title" style="text-transform: capitalize;">${product.itemName}</h5>
                <h6>Price: R ${product.price}.00</h6>
        
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal-${product.id}">
                    View More...
                </button>
                <button type="button" class="btn btn-primary" onclick="addToCheckout(${product.id})">Add to Checkout</button>

                <!-- Modal -->
                <div class="modal fade" id="productModal-${product.id}" tabindex="-1" aria-labelledby="productModal-${product.id}" aria-hidden="true" style="text-align: center;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="productModal-${product.id}Label">${product.itemName}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body flex-column">
                                <img src="${product.imageSrc}" class="card-img-top" alt="${product.itemName}">
                                <h6>Price:    R${product.price}</h6>
                                <h6>In stock:    ${product.stock}</h6>
                                <h6>Colour:    ${product.color}</h6>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onclick="addToCheckout(${product.id})">Add to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>

        <style>
            button:active {
                scale: 0.95;
            }
            .modal-title {
                text-transform: capitalize;
            }
        </style>
    `
    });
}


function addToCheckout(id) {
    checkoutList = JSON.parse(localStorage.getItem('checkout list'))
    let currentObject = checkoutList.filter(obj => obj.itemName == products[id-1].itemName)[0] || products[id-1]
    console.log(currentObject);
    if (checkoutList !== [] && currentObject.hasOwnProperty('quantity')) {
        currentObject.quantity++
        localStorage.setItem('checkout list', JSON.stringify(checkoutList))
    } else {
        currentObject.quantity = 1
        checkoutList.push(currentObject)
        localStorage.setItem('checkout list', JSON.stringify(checkoutList))
    }
}


function filterItems() {
    let result = filterGender(filterColor(filterPrice()))
    // products = 
    // loadProductCards(result)
}

function filterPrice(items) {
    let filteredByPrice;
    switch (priceRange.value) {
        case 'any':
            filteredByPrice = items
            break;
        default:
            filteredByPrice = items.filter(item => item.price < eval(priceRange.value))
            break;
    }
    return filteredByPrice
}

function filterColor(items) {
    let filteredByColor;
    console.log(items);
    // switch (baseColor.value) {
    //     case 'any':
    //         filteredByColor = items
    //         break;
    
    //     default:
    //         filteredByColor = items.filter(item => item.color == baseColor.value);
    //         break;
    // }
    return filteredByColor
}

function filterGender(items) {
    let filteredByGender;
    switch (gender.value) {
        case 'any':
            filteredByGender = items
            break;
    
        default:
            filteredByGender = items.filter(item => item.gender == gender.value)
            break;
    }
    return filteredByGender
}