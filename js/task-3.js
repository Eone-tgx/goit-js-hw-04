function getElementWidth(content, padding, border) {
  const cont = parseFloat(content);
  const padd = parseFloat(padding);
  const bordr = parseFloat(border);
  return cont + padd * 2 + bordr * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
