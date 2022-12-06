const productsContainer = document.querySelector('.products-grid');
const products = JSON.parse(localStorage.getItem('products'))


productsContainer.innerHTML = ''
products.forEach(product => {
    productsContainer.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${product.imageSrc}" class="card-img-top" alt="${product.itemName}">
        <div class="card-body">
            <h5 class="card-title">${product.itemName}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
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
                        <div class="modal-body">
                            <img src="${product.imageSrc}" class="card-img-top" alt="${product.itemName}">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
`
});

