function getShippingMessage(country, price, deliveryFee) {
  const p = +price;
  const d = +deliveryFee;
  const totalPrice = p + d;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));