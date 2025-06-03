import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002

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

function getCartItemCount() {  //Returnerar antalet artiklar i kundvagnen
  return cart.length
}

function getTotalCartValue() {
  return cart.reduce((sum, cartItem) => {
    return sum + cartItem.item.price * cartItem.amount
  }, 0) //Räknar ut totalsumman i kundvagnen, samt multiplicerar med antal amount för varje produkt
}

function getItem(index) {
  return cart[index]
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
  addToCart,
  getCartItemCount,
  getTotalCartValue,
  getItem,
  removeFromCart,
  editCart,
  clearCart
}
