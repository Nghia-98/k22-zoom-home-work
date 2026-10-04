console.log("================= Begin of assignment 03 - Tạo mã OTP ngẫu nhiên =================\n");

// 1. Hàm sinh mã OTP gồm 6 chữ số, trong khoảng 100000 - 999999
function generateOTP() {
    return Math.floor(Math.random() * 900000) + 100000;
}

// 2. Gọi hàm nhiều lần và hiển thị kết quả
console.log(generateOTP());
console.log(generateOTP());
console.log(generateOTP());
console.log(generateOTP());
console.log(generateOTP());

console.log("\n================= End of assignment 03 =================");
