var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {};
  itemObject[item] = Math.round(Math.random() * (100 - 1) + 1);
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return getCart();
};

function viewCart() {
  var sen = ["In your cart, you have "];
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    sen.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
  } else if (cart.length === 2) {
    sen.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} ` +
    `and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`);
  } else if (cart.length > 2) {
    for (var i = 0; i < cart.length-1; i++) {
      sen.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `);
    };
    sen.push(`and ${Object.keys(cart[cart.length-1])[0]} at ` +
    `$${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`);
  };
  console.log(sen.join(""));
  return sen.join("");
};

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    total += cart[i][item];
  };
  return total;
};

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var thing in cart[i]) {
      if (thing === item) {
        cart.splice(i, 1);
        return cart;
      };
    };
  };
  console.log("That item is not in your cart.");
};

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
};

// addToCart('jelly beans');
// addToCart('lemons');
// addToCart('bread');
// addToCart('bacon');
// console.log(total());
// viewCart();
// console.log(viewCart());
// console.log(cart1);
