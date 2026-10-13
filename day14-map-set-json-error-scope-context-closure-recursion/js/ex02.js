console.log("\n\n================= Begin of assignment 02 - Bộ nhớ đệm giỏ hàng (Cart Cache) =================\n");

// Giỏ hàng: key là productId (number), value là { name, price, quantity }
const cart = new Map();

// 1. Thêm sản phẩm vào giỏ hàng
function addToCart(productId, productInfo) {
  const existingItem = cart.get(productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.set(productId, { ...productInfo, quantity: 1 });
  }
}

// 2. Tính tổng tiền trước giảm giá
function getTotalPrice() {
  let total = 0;

  for (const item of cart.values()) {
    total += item.price * item.quantity;
  }

  return total;
}

// 3. Áp dụng mã giảm giá
function applyVoucher(voucherMap) {
  const totalPrice = getTotalPrice();
  const voucherCode = prompt("Nhập mã giảm giá (VD: SALE10, SALE20):");

  const discountPercent = voucherMap.get(voucherCode);
  if (!discountPercent) {
    return totalPrice;
  }

  return totalPrice * (1 - discountPercent / 100);
}

// 4. Hiển thị kết quả
console.log("--- addToCart ---");
addToCart(101, { name: "Áo thun", price: 150000 });
addToCart(102, { name: "Quần jeans", price: 300000 });
addToCart(101, { name: "Áo thun", price: 150000 });

console.log(cart.size);
console.log(cart.get(101));
console.log(cart.get(102));

console.log("\n--- getTotalPrice ---");
console.log(getTotalPrice());

console.log("\n--- applyVoucher ---");
const voucherMap = new Map([
  ["SALE10", 10],
  ["SALE20", 20],
]);
console.log(applyVoucher(voucherMap));

console.log("\n================= End of assignment 02 =================\n");
