const productsTableBody = document.querySelector('tbody.products-table')
const tableFoot = document.querySelector('tfoot')
const createItemBtn = document.querySelector('#create-item-btn')
const createItemModal = document.querySelector('#createItemModal')
const createItemForm = createItemModal.querySelector('form')
const sortBtn = document.querySelector('.sort-btn')
// Form Inputs
const itemNameInput = createItemForm.querySelector('#item-name')
const itemSrcInput = createItemForm.querySelector('#image-src')
const priceInput = createItemForm.querySelector('#price')
const stockInput = createItemForm.querySelector('#stock')
const colorInput = createItemForm.querySelector('#color')
const genderInput = createItemForm.querySelector('#gender')
const createSaveBtn = createItemModal.querySelector('.create-save-btn')

let products = JSON.parse(localStorage.getItem('products')) || []

createSaveBtn.addEventListener('click', () => {
  let product = {
    itemName: itemNameInput.value,
    price: priceInput.value,
    stock: stockInput.value,
    imageSrc: itemSrcInput.value,
    color: colorInput.value,
    gender: genderInput.value,    
  }
  products.push(product)
  localStorage.setItem('products', JSON.stringify(products))
  loadAdminProductsList()

  itemNameInput.value = ''
  itemSrcInput.value = ''
  priceInput.value = ''
  stockInput.value = ''
  colorInput.value = ''
  genderInput.value = ''
})


loadAdminProductsList()
function loadAdminProductsList() {
  let totalSingle = 0
  let totalPrice = 0;
  let totalQuantity = 0;
  products = JSON.parse(localStorage.getItem('products')) || []
  switch (sortBtn.value) {
    case 'numUp':
        products.sort((a, b) => a.price - b.price)
      break;
    case 'numDown':
        products.sort((a, b) => b.price - a.price)
      break;  
    default:
      break;
  }

  productsTableBody.innerHTML = ''
  products.forEach(product => {
    product.id = products.indexOf(product) + 1
    
    productsTableBody.innerHTML += `
      <tr id="item-row-${product.id}">
        <th scope="row">${product.id}</th>
        <td>${product.itemName}</td>
        <td>R${product.price}</td>
        <td>${product.stock}</td>
        <td><button style="background-color: rgba(255, 255, 255, 0); border: none;" class"edit-item" data-bs-toggle="modal" data-bs-target="#edit-modal-${product.id}" id="edit-modal-btn-${product.id}"><img style="height: 30px" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-edit-interface-kiranshastry-lineal-kiranshastry.png"/></button></td>
        <td><button style="background-color: rgba(255, 255, 255, 0); border: none;" class"del-item" onclick="itemRemove(${product.id - 1})"><img style="height:30px" src="https://img.icons8.com/material-rounded/48/FFFFFF/trash.png"/></button></td>
      </tr>

      <div style="color: black;" class="modal fade" id="edit-modal-${product.id}" tabindex="-1" aria-labelledby="edit-modal-${product.id}Label" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="edit-modal-${product.id}Label">Edit Product Item</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="display: flex; flex-direction: column;">
              <div class="img-container"></div>

              <form style="width: 100%;">
                <label for="item-name-${product.id}" style="padding-top: 10px; padding-bottom: 5px; font-weight: bold;">Product Name:</label>
                <input style="width: 100%;" type="text" id="item-name-${product.id}" name="item-name-${product.id}" placeholder="Enter the name of the product" value="${product.itemName}">
                <br>
                <label for="image-src-${product.id}" style="padding-top: 10px; padding-bottom: 5px; font-weight: bold;">Image Source:</label>
                <input style="width: 100%;" type="text" id="image-src-${product.id}" name="image-src-${product.id}" placeholder="Enter the link/path to the product image" value="${product.imageSrc}">
                <br>
                <label for="price-${product.id}" style="padding-top: 10px; padding-bottom: 5px; font-weight: bold;">Price (Rand):</label>
                <input style="width: 100%;" type="number" id="price-${product.id}" name="price-${product.id}" placeholder="Enter the price of the product" value="${product.price}">
                <br>
                <label for="stock-${product.id}" style="padding-top: 10px; padding-bottom: 5px; font-weight: bold;">Stock:</label>
                <input style="width: 100%;" type="number" id="stock-${product.id}" name="stock-${product.id}" step="1" placeholder="Enter quantity of product in stock" value="${product.stock}">
                <br>
                <label for="description-${product.id}" style="padding-top: 10px; padding-bottom: 5px; font-weight: bold;">Item description:</label>
                <textarea style="width: 100%;" type="text" id="description-${product.id}" name="description-${product.id}" placeholder="Enter a detailed description of the product">${product.description}</textarea>
              </form>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary create-save-btn" data-bs-dismiss="modal" onclick="saveItemEdits(this, ${product.id})">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    `
    totalSingle += product.price
    totalPrice += product.price * product.stock
    totalQuantity += product.stock

  })

  tableFoot.innerHTML = `
    <tr>
      <th>Total:</th>
      <td>R${eval(totalSingle)}</td>
      <td>R${eval(totalPrice)}</td>
      <td>${eval(totalQuantity)} Items</td>
      <td><button id="create-item-btn" data-bs-toggle="modal" data-bs-target="#createItemModal">Create New Item</button></td>
      <td><button onclick="reset()" class="bg-danger text-white border-0 purchase">Reset Default</button></td>
    </tr>
    <style>
      button.purchase:active {
        scale: 0.90;
        box-shadow: none;
      }
      button.purchase {
        box-shadow: 0 0 5px black;
      }
    </style>
  `

}

function itemRemove(index) {
  let newProducts = products.slice(0, index).concat(products.slice(index + 1))
  localStorage.setItem('products', JSON.stringify(newProducts))
  products = JSON.parse(localStorage.getItem('products'))
  loadAdminProductsList()
}

function saveItemEdits(btn, id) {
  let product = products[id - 1]

  let itemNameInput = btn.parentElement.parentElement.querySelector(`#item-name-${id}`)
  let imageSrcInput = btn.parentElement.parentElement.querySelector(`#image-src-${id}`)
  let priceInput = btn.parentElement.parentElement.querySelector(`#price-${id}`)
  let stockInput = btn.parentElement.parentElement.querySelector(`#stock-${id}`)
  let descriptionInput = btn.parentElement.parentElement.querySelector(`#description-${id}`)
  
  product.itemName = itemNameInput.value
  product.imageSrc = imageSrcInput.value
  product.price = priceInput.value
  product.stock = stockInput.value
  product.color = colorInput.value
  product.gender = genderInput.value

  products = JSON.parse(localStorage.getItem('products'))
  products[id - 1] = product
  localStorage.setItem('products', JSON.stringify(products))
  loadAdminProductsList()
}

function sortList() {
  switch (sortBtn.value) {
    case 'numUp':
        sortBtn.value = 'numDown'
        sortBtn.innerHTML = 'Price: <img width="24px" src="https://img.icons8.com/fluency-systems-regular/48/null/sort-numeric-up.png"/>'
      break;
    case 'numDown':
        sortBtn.value = 'numUp'
        sortBtn.innerHTML = 'Price: <img src="https://img.icons8.com/material-outlined/24/null/numerical-sorting-12.png">'
      break;  
    default:
      break;
  }
  loadAdminProductsList()
}

function reset() {
  localStorage.removeItem('checkout list')
  localStorage.removeItem('products')
  loadAdminProductsList()
}