import { isCartItem, isProduct } from "./validation.js"  

let cart = []
let idCounter = 2002

function getCartItemCount() {  //Returnerar hur många produkter som finns i kundvagnen
  return cart.length
}

function getItem(index) {   //Returnerar ett kundvagnsobjekt på en viss plats i listan
  return cart[index]
}

function getTotalCartValue() {       //Räknar ut det totala priset i kundvagnen, * priset med amount och + allt
  return cart.reduce((sum, cartItem) => {
    return sum + cartItem.item.price * cartItem.amount
  }, 0)
}

function addToCart(newItem) {  //Tar emot en produktobjekt, kan vara id, name, price
  if (!isProduct(newItem)) {   //Kollar om den är giltig produkt genom att använda isProduct
    return false
  }

  const cartItem = {       //Skapar en nytt kundvagnsobjekt
    id: idCounter,
    amount: 1,
    item: newItem
  }

  idCounter++            //Ökar med 1 så att nästa produkt får nytt, unikt ID
  cart.push(cartItem)
  return true            
}

function removeFromCart(itemId) {     //Tar bort ett objekt från kundvagnen genom filtrering och matchande ID
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
