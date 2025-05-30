import {
  addToCart,
  getCartItemCount,
  getItem,
  getTotalCartValue,
  removeFromCart,
  editCart,
  clearCart
} from "../cart"

const exampleProduct = {
  id: 1001,
  name: 'Badanka',
  price: 500
}

describe('Cart', () => {
  beforeEach(() => {     //Denna kod körs före varje test. Den ser till att kundvagnen är tom innan varje test börjar, så att testerna inte påverkar varandra
    clearCart()
  })

  test('addToCart adds a new product to the cart', () => {
    addToCart(exampleProduct)
    expect(getCartItemCount()).toBe(1)
  })

  test('addToCart increases amount if product already exists', () => {
    addToCart(exampleProduct)
    addToCart(exampleProduct)
    const item = getItem(0)
    expect(item.amount).toBe(2)
  })

  test('getTotalCartValue returns correct total value', () => {
    addToCart(exampleProduct)
    addToCart(exampleProduct)
    expect(getTotalCartValue()).toBe(1000)
  })

  test('getItem returns the correct item', () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    expect(item.item.name).toBe("Badanka")
  })

  test('removeFromCart removes the item by id', () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    removeFromCart(item.id)
    expect(getCartItemCount()).toBe(0)
  })

  test('editCart updates the amount of the item', () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    editCart(item.id, { amount: 5 })
    expect(getItem(0).amount).toBe(5)
  })

  test('clearCart empties the cart', () => {
    addToCart(exampleProduct)
    addToCart(exampleProduct)
    clearCart()
    expect(getCartItemCount()).toBe(0)
  })
})
