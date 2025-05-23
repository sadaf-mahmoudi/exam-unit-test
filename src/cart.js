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
  }, 0)
}

function addToCart(newItem) {
  if (!isProduct(newItem)) {
    return false
  }

  const cartItem = {
    id: idCounter,
    amount: 1,
    item: newItem
  }

  idCounter++
  cart.push(cartItem)
  return true
}

function removeFromCart(itemId) {
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
