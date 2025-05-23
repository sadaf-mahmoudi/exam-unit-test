import { isCartItem, isProduct } from "../validation.js";

const exampleProduct = {
  id: 1001,
  name: 'Badanka',
  price: 500
};

const exampleCartObject = {
  id: 2001,
  amount: 1,
  item: exampleProduct
};

describe('Validation', () => {

  // 1. it returns true for a valid cart object
  test('returns true for a valid cart item', () => {
    expect(isCartItem(exampleCartObject)).toBe(true);
  });

  // 2. it returns false for invalid cart objects
  test('returns false if cart item is missing amount', () => {
    const invalidCartItem = {
      id: 2001,
      item: exampleProduct
    };
    expect(isCartItem(invalidCartItem)).toBe(false);
  });

  test('returns false if cart item has invalid product inside', () => {
    const invalidCartItem = {
      id: 2001,
      amount: 1,
      item: { name: 'No id', price: 10 }
    };
    expect(isCartItem(invalidCartItem)).toBe(false);
  });

  // 3. it returns true for a valid product
  test('returns true for a valid product', () => {
    expect(isProduct(exampleProduct)).toBe(true);
  });

  // 4. it returns false for invalid product objects
  test('returns false for invalid product (missing id)', () => {
    const invalidProduct = {
      name: 'Badanka',
      price: 500
    };
    expect(isProduct(invalidProduct)).toBe(false);
  });

  test('returns false for product with non-numeric price', () => {
    const invalidProduct = {
      id: 1234,
      name: 'Badanka',
      price: "20"
    };
    expect(isProduct(invalidProduct)).toBe(false);
  });

  test('returns false if input is not an object', () => {
    expect(isProduct(null)).toBe(false);
    expect(isProduct("hej")).toBe(false);
    expect(isProduct(42)).toBe(false);
  });
});

