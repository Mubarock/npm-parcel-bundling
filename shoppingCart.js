// exporting module

console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finished feching users');

const shippingCost = 10;

export const cart = [];

export const addToCart = function (products, qtity) {
  cart.push({ products, qtity });
  console.log(`${qtity} ${products} was added`);
};

// addToCart('sugar', 10);

const figure1 = 3;
const fig = 4;

export { figure1, fig };

export default function (products, qtity) {
  cart.push({ products, qtity });
  console.log(`${qtity} ${products} added to cart`);
}
