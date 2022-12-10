const itemsTableBody = document.querySelector('tbody.products-table')
const tableFoot = document.querySelector('tfoot')
const createItemBtn = document.querySelector('#create-item-btn')
const sortBtn = document.querySelector('.sort-btn')

let items = JSON.parse(localStorage.getItem('checkout list')) || []

loadCheckoutList()
function loadCheckoutList() {
  let totalSingle = 0
  let totalPrice = 0;
  let totalQuantity = 0;
  items = JSON.parse(localStorage.getItem('checkout list')) || []
  switch (sortBtn.value) {
    case 'numUp':
        items.sort((a, b) => (a.price * a.quantity) - (b.price * b.quantity))
      break;
    case 'numDown':
        items.sort((a, b) => (b.price * b.quantity) - (a.price * a.quantity))
      break;  
    default:
      break;
  }
  itemsTableBody.innerHTML = ''
  items.forEach(item => {  
    itemsTableBody.innerHTML += `
      <tr id="item-row-${items.indexOf(item)+1}">
        <th scope="row">${items.indexOf(item)+1}</th>
        <td>${item.itemName}</td>
        <td>R${item.price}</td>
        <td>R${item.price * item.quantity}</td>
        <td><input style="width: 50px;" type="number" id="quantity-${items.indexOf(item)+1}" name="quantity-${item.id}" step="1" value="${item.quantity}" onchange="changeQuantity(this, ${items.indexOf(item)})"></td>
        <td><button style="background-color: rgba(255, 255, 255, 0); border: none;" class"del-item" onclick="itemRemove(${items.indexOf(item)})"><img style="height:30px" src="https://img.icons8.com/material-rounded/48/FFFFFF/trash.png"/></button></td>
      </tr>
    `
    totalSingle += item.price
    totalPrice += item.price * item.quantity
    totalQuantity += item.quantity
  })

  
  tableFoot.innerHTML = `
    <tr>
      <th>Total:</th>
      <td></td>
      <td>R${eval(totalSingle)}</td>
      <td>R${eval(totalPrice)}</td>
      <td>${eval(totalQuantity)} Items</td>
      <td><button onclick="purchase()" class="bg-danger text-white border-0 purchase">Purchase</button></td>
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

function changeQuantity(quantityInputEl, index) {
  items[index].quantity = parseInt(quantityInputEl.value)
  localStorage.setItem('checkout list', JSON.stringify(items))
}

function itemRemove(index) {
  items = JSON.parse(localStorage.getItem('checkout list'))
  items[index].quantity = 0
  items.splice(index, 1)
  localStorage.setItem('checkout list', JSON.stringify(items))
  loadCheckoutList()
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
  loadCheckoutList()
}
