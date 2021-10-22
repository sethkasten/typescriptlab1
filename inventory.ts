import { InventoryItem } from "./src/models/InventoryItem";
import { Product } from "./src/models/Product";

const products: Product[] = [
  {
    name: "motor",
    price: 10,
  },
  {
    name: "sensor",
    price: 12.5,
  },
  {
    name: "LED",
    price: 1,
  },
];

const inventory: InventoryItem[] = [
  {
    product: products[0],
    quantity: 10,
  },
  {
    product: products[1],
    quantity: 4,
  },
  {
    product: products[2],
    quantity: 20,
  },
];

const calcInventoryValue = (inventoryItems: InventoryItem[]): number =>
  inventoryItems.reduce((acc, cv) => {
    return acc + cv.product.price * cv.quantity;
  }, 0);
