import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002

function getCartItemCount() {
  return cart.length
}

function getItem(index) {
  return cart[index]
}

function getTotalCartValue() {
  return cart.reduce((sum, cartItem) => { 
    return sum + cartItem.item.price * cartItem.amount
  }, 0) //Räknar ut totalsumman i kundvagnen, samt multiplicerar med antal amount för varje produkt
}

function addToCart(newItem) {
  if (!isProduct(newItem)) {
    return false
  }

  const existingIndex = cart.findIndex(cartItem => cartItem.item.id === newItem.id)

  if (existingIndex !== -1) { // Om produkten redan finns i vagnen, öka mängden
    cart[existingIndex].amount += 1
  } else {
    const cartItem = {
      id: idCounter,
      amount: 1,
      item: newItem
    }
    idCounter++
    cart.push(cartItem)
  }

  return true
}

function removeFromCart(itemId) {     // Tar bort produkt med ett visst ID
  cart = cart.filter(item => item.id !== itemId)
}

function editCart(itemId, newValues) {
  const index = cart.findIndex(item => item.id === itemId)
  if (index !== -1) {
    cart[index] = {
      ...cart[index],
      ...newValues
    }
  }
}

function clearCart() {
  cart = []
}

export {
  getCartItemCount,
  getItem,
  getTotalCartValue,
  addToCart,
  removeFromCart,
  editCart,
  clearCart
}
