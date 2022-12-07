const productsTableBody = document.querySelector('tbody.products-table')
const createItemBtn = document.querySelector('#create-item-btn')
const createItemModal = document.querySelector('#createItemModal')
const createItemForm = createItemModal.querySelector('form')
// Form Inputs
const itemNameInput = createItemForm.querySelector('#item-name')
const itemSrcInput = createItemForm.querySelector('#image-src')
const priceInput = createItemForm.querySelector('#price')
const stockInput = createItemForm.querySelector('#stock')
const descriptionInput = createItemForm.querySelector('#description')
const createSaveBtn = createItemModal.querySelector('.create-save-btn')

let products = JSON.parse(localStorage.getItem('products'))

console.log(products);

createSaveBtn.addEventListener('click', () => {
  let product = {
    itemName: itemNameInput.value,
    price: priceInput.value,
    stock: stockInput.value,
    imageSrc: itemSrcInput.value,
    description: descriptionInput.value
  }
  products.push(product)
  localStorage.setItem('products', JSON.stringify(products))
  loadAdminProductsList()

  itemNameInput.value = ''
  itemSrcInput.value = ''
  priceInput.value = ''
  stockInput.value = ''
  descriptionInput.value = ''
})




loadAdminProductsList()
function loadAdminProductsList() {
  productsTableBody.innerHTML = ''
  products.forEach(product => {
    product.id = products.indexOf(product) + 1
    productsTableBody.innerHTML += `
    <tr id="item-row-${product.id}">
      <th scope="row">${product.id}</th>
      <td>${product.itemName}</td>
      <td>R${product.price}</td>
      <td>${product.stock}</td>
      <td><button style="background-color: rgba(255, 255, 255, 0); border: none;" class"edit-item" data-bs-toggle="modal" data-bs-target="#edit-modal-${product.id}"><img style="height: 30px" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-edit-interface-kiranshastry-lineal-kiranshastry.png"/></button></td>
      <td><button style="background-color: rgba(255, 255, 255, 0); border: none;" class"del-item" onclick="itemRemove(${product.id - 1})"><img style="height:30px" src="https://img.icons8.com/material-rounded/48/FFFFFF/trash.png"/></button></td>
    </tr>

    <div class="modal fade" id="edit-modal-${product.id}" tabindex="-1" aria-labelledby="edit-modal-${product.id}Label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="edit-modal-${product.id}Label">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="img-container"></div>
          
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary create-save-btn">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  `
  })
}

function itemRemove(index) {
  let newProducts = products.slice(0, index).concat(products.slice(index + 1))
  localStorage.setItem('products', JSON.stringify(newProducts))
  products = JSON.parse(localStorage.getItem('products'))
  loadAdminProductsList()
}
