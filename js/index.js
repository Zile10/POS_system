const productsContainer = document.querySelector('.products-grid');
let products = JSON.parse(localStorage.getItem('products'))

let checkoutList = JSON.parse(localStorage.getItem('checkout list')) || [];
localStorage.setItem('checkout list', JSON.stringify(checkoutList));

loadProductCards()
function loadProductCards() {
    productsContainer.innerHTML = ''
    
    products.forEach(product => {
        productsContainer.innerHTML += `
        <div class="card bg-dark" style="width: 18rem;">
            <img src="${product.imageSrc}" class="card-img-top" alt="${product.itemName}">
            <div class="card-body">
                <h5 class="card-title">${product.itemName}</h5>
                <h6>Price: R${product.price}</h6>
    
                <p class="card-text">${product.description}</p>
                
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal-${product.id}">
                    Launch demo modal
                </button>
    
                <!-- Modal -->
                <div class="modal fade" id="productModal-${product.id}" tabindex="-1" aria-labelledby="productModal-${product.id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="productModal-${product.id}Label">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body flex-column">
                                <img src="${product.imageSrc}" class="card-img-top" alt="${product.itemName}">
                                <h6>Price: R${product.price}</h6>
                                <p>${product.description}</p>
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
