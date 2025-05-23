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
    clearCart()
  })

  test("addToCart lägger till en ny produkt i kundvagnen", () => {
    const itemCountBefore = getCartItemCount()
    addToCart(exampleProduct)
    const itemCountAfter = getCartItemCount()
    expect(itemCountAfter).toBe(itemCountBefore + 1)
  })

  test("getCartItemCount returnerar korrekt antal", () => {
    addToCart(exampleProduct)
    addToCart(exampleProduct)
    expect(getCartItemCount()).toBe(2)
  })

  test("getItem returnerar rätt produkt", () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    expect(item.item.name).toBe("Vattenpistol")
  })

  test("getTotalCartValue returnerar korrekt värde", () => {
    addToCart(exampleProduct) // 40
    addToCart(exampleProduct) // 40
    expect(getTotalCartValue()).toBe(80)
  })

  test("removeFromCart tar bort rätt produkt", () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    removeFromCart(item.id)
    expect(getCartItemCount()).toBe(0)
  })

  test("editCart ändrar mängd", () => {
    addToCart(exampleProduct)
    const item = getItem(0)
    editCart(item.id, { amount: 5 })
    const updatedItem = getItem(0)
    expect(updatedItem.amount).toBe(5)
  })

  test("clearCart tömmer kundvagnen", () => {
    addToCart(exampleProduct)
    addToCart(exampleProduct)
    clearCart()
    expect(getCartItemCount()).toBe(0)
  })
})
