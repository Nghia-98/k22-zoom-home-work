console.log("================= Begin of assignment 02 - Bộ lọc và sắp xếp giỏ hàng =================\n");

// 1. Khai báo danh sách sản phẩm
const products = [
    { id: 1, name: "iPhone 15", price: 22000000, category: "Điện thoại" },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 20000000,
        category: "Điện thoại",
    },
    { id: 3, name: "MacBook Air M2", price: 26000000, category: "Laptop" },
    { id: 4, name: "Dell XPS 13", price: 30000000, category: "Laptop" },
    { id: 5, name: "AirPods Pro", price: 6000000, category: "Phụ kiện" },
    { id: 6, name: "Apple Watch", price: 9000000, category: "Phụ kiện" },
];

// 2. Lọc sản phẩm theo danh mục ("Tất cả" trả về toàn bộ danh sách)
function getFilteredProducts(productList, category) {
    if (category === "Tất cả") return productList;
    return productList.filter((product) => product.category === category);
}

// 3. Sắp xếp sản phẩm theo giá, không làm thay đổi mảng gốc
function getSortedProducts(productList, sortType) {
    let sortedList = [...productList];

    if (sortType === "asc") {
        sortedList.sort((a, b) => a.price - b.price);
    } else if (sortType === "desc") {
        sortedList.sort((a, b) => b.price - a.price);
    }

    return sortedList;
}

// 4. Chuyển danh sách sản phẩm thành mảng chuỗi mô tả
function getProductDescriptions(productList) {
    return productList.map((product) => `${product.name} - ${product.category} - ${product.price}`);
}

// 5. Tính tổng tiền của danh sách sản phẩm
function calculateTotal(productList) {
    return productList.reduce((sum, product) => sum + product.price, 0);
}

// 6. Hiển thị kết quả
console.log("--- getFilteredProducts(products, \"Điện thoại\") ---");
const filteredProducts = getFilteredProducts(products, "Điện thoại");
console.log(filteredProducts);

console.log("\n--- getSortedProducts(products, \"asc\") ---");
const sortedProducts = getSortedProducts(products, "asc");
console.log(sortedProducts);

console.log("\n--- getProductDescriptions(products) ---");
const productDescriptions = getProductDescriptions(products);
console.log(productDescriptions);

console.log("\n--- calculateTotal(filteredProducts) ---");
const total = calculateTotal(filteredProducts);
console.log(total);

console.log("\n--- Kết hợp nhiều hàm ---");
const combinedFiltered = getFilteredProducts(products, "Điện thoại");
const combinedSorted = getSortedProducts(combinedFiltered, "asc");
const combinedDescriptions = getProductDescriptions(combinedSorted);
console.log(combinedDescriptions);
const combinedTotal = calculateTotal(combinedSorted);
console.log(combinedTotal);

console.log("\n--- Kiểm tra mảng products ban đầu không bị thay đổi ---");
console.log(products);

console.log("\n================= End of assignment 02 =================");
