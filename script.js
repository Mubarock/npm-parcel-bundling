// importing module
// import { addToCart, figure1 as figure, fig } from './shoppingCart.js';

console.log('Importing module');
// addToCart('sugar', 10);

// console.log(figure1, fig);

// import * as ShoppingCart from './shoppingCart.js';

// ('./shoppingCart.js');

// console.log('Importing module');
// ShoppingCart.addToCart('sugar', 10);

// console.log(ShoppingCart.figure1, ShoppingCart.fig);

import add, { cart } from './shoppingCart.js';
add('biro', 20);
add('pencil', 70);
add('maggi', 20);

// import { cart } from './shoppingCart.js';
console.log(cart);

// console.log('Starting');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1), body: data.at(-1) };
};
const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(res => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quatity) {
    cart.push({ product, quatity });
    console.log(`${quatity} ${product} added to cart`);
  };

  const orderStock = function (product, quatity) {
    console.log(`${quatity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
const user = (state.user.loggedIn = false);
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
