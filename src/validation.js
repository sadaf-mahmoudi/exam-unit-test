function isCartItem(maybeCartItem) {   // Kollar om ett objekt är en rätt cartItem
  if (
    typeof maybeCartItem !== 'object' ||   // Kontrollerar att det ska vara ett objekt
    maybeCartItem === null ||
    typeof maybeCartItem.id !== 'number' ||
    typeof maybeCartItem.amount !== 'number' ||
    maybeCartItem.amount < 1 ||
    !isProduct(maybeCartItem.item)
  ) {
    return false;
  }

  return true;
}

function isProduct(maybeProduct) {    // Kollar om ett objekt är en rätt produkt
  if (
    typeof maybeProduct !== 'object' ||  
    maybeProduct === null ||
    typeof maybeProduct.id !== 'number' ||
    typeof maybeProduct.name !== 'string' ||
    typeof maybeProduct.price !== 'number'
  ) {
    return false;     
  }

  return true;       
}

export { isCartItem, isProduct };
