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

// let item = new Product({
//   itemName: 'Polka Dot Socks',
//   price: 40,
//   stock: 100,
//   imageSrc: './assets/images/happy-socks-big-polka-dots-blue-green-red-white.jpg'
// });
// products.push(item)
// localStorage.setItem('products', JSON.stringify(products))
// console.log(products);
// loadAdminProductsList()




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
      <td><button class"edit-item" onclick="launchEditor(${product.id - 1})">Edit</button></td>
      <td><button class"del-item" onclick="itemRemove(${product.id - 1})">Delete</button></td>
    </tr>
  `
  })
}

function itemRemove(index) {
  let newProducts = products.slice(0, index).concat(products.slice(index + 1))
  localStorage.setItem('products', JSON.stringify(newProducts))
  products = JSON.parse(localStorage.getItem('products'))
  loadAdminProductsList()
}

function launchEditor(index) {
  let item = document.querySelector(`#item-row-${index + 1}`)
  item.innerHTML += `
    <div class="modal fade show" id="editModal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editModal-${index}Label">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="../assets/images/happy-socks-blue-cloud.jpg" class="card-img-top" alt="happy socks blue sky clouds">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `
}