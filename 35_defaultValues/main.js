function calculateBill(total, tax = 0.15, tip = 0.2) {
  return total + total * tax + total * tip;
}
const totalBill = calculateBill(100);
console.log(`total bill is equal to : $${totalBill}`);
const totalBill2 = calculateBill(100, undefined, 0.25);
console.log(`total bill is equal to : $${totalBill2}`);
