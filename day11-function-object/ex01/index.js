const cart = {
    items: [
        {
            id: 1,
            name: "Laptop",
            price: 15000000,
            quantity: 1,
            category: "Electronics",
        },
        {
            id: 2,
            name: "Mouse",
            price: 300000,
            quantity: 2,
            category: "Electronics",
        },
    ],
    _discountRate: 0,
    validCoupons: {
        WELCOME10: 0.1,
        SUMMER20: 0.2,
        VIP30: 0.3,
    },

    // Trả về tổng sản phẩm trong giỏ
    get totalQuantity() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Tính tổng tiền hàng (chưa áp dụng mã giảm giá)
    get subtotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    // Áp dụng mã giảm giá bằng cách truyền tên coupon
    // Nếu coupon có trong `validCoupons`, gán `_discountRate`. Nếu không, in thông báo lỗi và không gán.
    set applyCoupon(code) {
        if (code in this.validCoupons) {
            this._discountRate = this.validCoupons[code];
        } else {
            console.log(`Mã giảm giá "${code}" không hợp lệ.`);
        }
    },

    // Tính tổng tiền thực tế phải trả
    get totalPrice() {
        return this.subtotal - this.subtotal * this._discountRate;
    },

    // Thêm nhiều sản phẩm cùng lúc
    // - Nếu item đã tồn tại (dựa vào id): cộng dồn quantity.
    // - Nếu chưa có: kiểm tra xem item truyền vào có mặc định `quantity` chưa, nếu chưa thì gán mặc định bằng 1 rồi mới push.
    addItems(...newItems) {
        newItems.forEach((newItem) => {
            let existingItem = this.items.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity ?? 1;
            } else {
                this.items.push({ ...newItem, quantity: newItem.quantity ?? 1 });
            }
        });
    },

    // Cập nhật số lượng sản phẩm theo id
    // Nếu newQuantity <= 0 thì tự động xoá sản phẩm đó khỏi giỏ.
    updateQuantity(id, newQuantity) {
        let item = this.items.find((item) => item.id === id);
        if (!item) {
            console.log(`Không tìm thấy sản phẩm có id = ${id}.`);
            return;
        }

        if (newQuantity <= 0) {
            this.removeItem(id);
        } else {
            item.quantity = newQuantity;
        }
    },

    // Xoá sản phẩm theo id
    removeItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
    },

    // Lọc danh sách sản phẩm theo danh mục (category)
    getItemsByCategory(category) {
        return this.items.filter((item) => item.category === category);
    },

    // In hoá đơn chi tiết ra console
    printInvoice() {
        console.log("================ HOÁ ĐƠN BAN HÀNG ================");
        this.items.forEach((item) => {
            console.log(`${item.name} - ${formatVND(item.price)} x ${item.quantity} = ${formatVND(item.price * item.quantity)}`);
        });
        console.log(`Tổng tiền hàng: ${formatVND(this.subtotal)}`);
        console.log(`Giảm giá: ${this._discountRate * 100}% (-${formatVND(this.subtotal * this._discountRate)})`);
        console.log(`Tổng thanh toán: ${formatVND(this.totalPrice)}`);
        console.log("==================================================");
    },
};

// Định dạng số tiền theo VNĐ
function formatVND(amount) {
    return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// ===== Test =====

console.log("--- items ban đầu ---");
console.log(cart.items);

console.log("\n--- totalQuantity & subtotal ban đầu ---");
console.log(cart.totalQuantity); // 3
console.log(formatVND(cart.subtotal)); // 15.600.000 ₫

console.log("\n--- applyCoupon hợp lệ ---");
cart.applyCoupon = "WELCOME10";
console.log(formatVND(cart.totalPrice)); // subtotal sau khi giảm 10%

console.log("\n--- applyCoupon không hợp lệ ---");
cart.applyCoupon = "INVALID";
console.log(cart._discountRate); // vẫn giữ 0.1, không đổi

console.log("\n--- addItems ---");
cart.addItems(
    { id: 3, name: "Keyboard", price: 700000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 300000, quantity: 1, category: "Electronics" }
);
console.log(cart.items);

console.log("\n--- updateQuantity ---");
cart.updateQuantity(1, 3); // Laptop quantity = 3
cart.updateQuantity(2, 0); // Xoá Mouse khỏi giỏ hàng
console.log(cart.items);

console.log("\n--- removeItem ---");
cart.removeItem(3); // Xoá Keyboard
console.log(cart.items);

console.log("\n--- getItemsByCategory ---");
console.log(cart.getItemsByCategory("Electronics"));

console.log("\n--- printInvoice ---");
cart.printInvoice();
