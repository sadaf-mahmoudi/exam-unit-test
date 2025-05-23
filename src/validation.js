function isProduct(maybeProduct) {
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

function isCartItem(maybeCartItem) {
  if (
    typeof maybeCartItem !== 'object' ||
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

export { isCartItem, isProduct };
