const itemsTableBody = document.querySelector('tbody.products-table')
const createItemBtn = document.querySelector('#create-item-btn')
// const createItemModal = document.querySelector('#createItemModal')
// const createItemForm = createItemModal.querySelector('form')
// Form Inputs
// const itemNameInput = createItemForm.querySelector('#item-name')
// const itemSrcInput = createItemForm.querySelector('#image-src')
// const priceInput = createItemForm.querySelector('#price')
// const stockInput = createItemForm.querySelector('#stock')
// const descriptionInput = createItemForm.querySelector('#description')
// const createSaveBtn = createItemModal.querySelector('.create-save-btn')

let items = JSON.parse(localStorage.getItem('checkout list'))

console.log(items);

// createSaveBtn.addEventListener('click', () => {
//   let product = {
//     itemName: itemNameInput.value,
//     price: priceInput.value,
//     stock: stockInput.value,
//     imageSrc: itemSrcInput.value,
//     description: descriptionInput.value
//   }
//   products.push(product)
//   localStorage.setItem('products', JSON.stringify(products))
//   loadAdminProductsList()

//   itemNameInput.value = ''
//   itemSrcInput.value = ''
//   priceInput.value = ''
//   stockInput.value = ''
//   descriptionInput.value = ''
// })


loadCheckoutList()
function loadCheckoutList() {
  itemsTableBody.innerHTML = ''
  items.forEach(item => {
    item.id = items.indexOf(item) + 1
    
    itemsTableBody.innerHTML += `
      <tr id="item-row-${item.id}">
        <th scope="row">${item.id}</th>
        <td>${item.itemName}</td>
        <td>R${item.price}</td>
        <td><input style="width: 50px;" type="number" id="quantity-${item.id}" name="quantity-${item.id}" step="1" value="${item.quantity}" onclick="changeQuantity(this, ${item.id})"></td>
        <td><button style="background-color: rgba(255, 255, 255, 0); border: none;" class"del-item" onclick="itemRemove(${item.id})"><img style="height:30px" src="https://img.icons8.com/material-rounded/48/FFFFFF/trash.png"/></button></td>
      </tr>
    `
  })
}

function changeQuantity(quantityInputEl, id) {
  items[id-1].quantity = JSON.parse(quantityInputEl.value)
  localStorage.setItem('checkout list', JSON.stringify(items))
}

function itemRemove(id) {
  items[id-1].quantity = 0
  let newItems = items.slice(0, id-1).concat(items.slice(id))
  localStorage.setItem('checkout list', JSON.stringify(newItems))
  items = JSON.parse(localStorage.getItem('checkout list'))
  loadCheckoutList()
}