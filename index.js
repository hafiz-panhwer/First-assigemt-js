var priceLaptop = 3000;
var priceSmartphone = 2000;
var priceHeadphones = 500;

var qtyLaptop = prompt("Enter quantity of Laptops:");
var qtySmartphone = prompt("Enter quantity of Smartphones:");
var qtyHeadphones = prompt("Enter quantity of Headphones:");

var totalLaptop = priceLaptop * qtyLaptop;
var totalSmartphone = priceSmartphone * qtySmartphone;
var totalHeadphones = priceHeadphones * qtyHeadphones;

var totalBill = totalLaptop + totalSmartphone + totalHeadphones;

var discount = 0;

if (totalBill > 5000) {
  discount = totalBill * 0.20;
}
else {
  if (totalBill >= 3001) {
    discount = totalBill * 0.15;
  }
  else {
    if (totalBill >= 1001) {
      discount = totalBill * 0.10;
    }
  }
}

var finalAmount = totalBill - discount;

document.write("Total Bill: Rs " + totalBill + "<br>");
document.write("Discount: Rs " + discount + "<br>");
document.write("Amount to Pay: Rs " + finalAmount);
