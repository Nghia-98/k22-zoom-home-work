console.log("================= Begin of assignment 02 =================\n");

// 1. Khai báo chuỗi tên cần chuẩn hóa (thay đổi giá trị để test)
let fullName = " ngUYen vaN a ";

// 2. Hàm chuẩn hóa tên
function normalizeName(fullName) {
    // Xóa khoảng trắng thừa ở đầu/cuối, tách các từ theo khoảng trắng
    let words = fullName.trim().split(" ").filter((word) => word !== "");

    // Viết hoa chữ cái đầu, viết thường các chữ còn lại của mỗi từ
    let normalizedWords = words.map((word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    });

    return normalizedWords.join(" ");
}

// 3. Hiển thị kết quả
let result = normalizeName(fullName);
console.log(`fullName = "${fullName}"`);
console.log(`Kết quả: "${result}"`);

console.log("\n================= End of assignment 02 =================");
