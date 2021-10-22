import { Product } from "./src/models/Product";

const products: Product[] = [
  { name: "dog", price: 10 },
  { name: "cat", price: 20 },
  { name: "fish", price: 30 },
];

const calcAverageProductPrice = (products: Product[]): number =>
  products.reduce((acc, cv) => {
    return acc + cv.price;
  }, 0) / products.length;
