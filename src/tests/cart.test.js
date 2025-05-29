import {
  addToCart,
  getCartItemCount,
  getItem,
  getTotalCartValue,
  removeFromCart,
  editCart,
  clearCart
} from "../cart.js"

describe("Cart", () => {
  const exampleProduct = { id: 1002, name: "Vattenpistol", price: 40 }

  beforeEach(() => {
    //Denna kod körs före varje test. Den ser till att kundvagnen är tom innan varje test börjar, så att testerna inte påverkar varandra
    clearCart()
  })

  test("addToCart adds a new product to the cart", () => {
    const itemCountBefore = getCartItemCount()
    addToCart(exampleProduct)
    const itemCountAfter = getCartItemCount()
    expect(itemCountAfter).toBe(itemCountBefore + 1)
  })

  test("getCartItemCount returns the correct number", () => {
    addToCart(exampleProduct)
    addToCart(exampleProduct)
    expect(getCartItemCount()).toBe(2)
  })

  test("getItem returns the correct product", () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    expect(item.item.name).toBe("Vattenpistol")
  })

  test("getTotalCartValue returns the correct total", () => {
    addToCart(exampleProduct) // 40
    addToCart(exampleProduct) // 40
    expect(getTotalCartValue()).toBe(80)
  })

  test("removeFromCart removes the correct product", () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    removeFromCart(item.id)
    expect(getCartItemCount()).toBe(0)
  })

  test("editCart changes the quantity", () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    editCart(item.id, { amount: 5 })
    const updatedItem = getItem(0)
    expect(updatedItem.amount).toBe(5)
  })

  test("clearCart empties the cart", () => {
    addToCart(exampleProduct)
    addToCart(exampleProduct)
    clearCart()
    expect(getCartItemCount()).toBe(0)
  })
})
