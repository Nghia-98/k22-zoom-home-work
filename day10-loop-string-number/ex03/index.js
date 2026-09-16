console.log("================= Begin of assignment 03 - Che thông tin email =================\n");

// 1. Khai báo email cần che thông tin (thay đổi giá trị để test)
let email = "paul123@gmail.com";

// 2. Hàm che tên tài khoản trong email
function maskEmail(email) {
    let atIndex = email.indexOf("@");
    let username = email.slice(0, atIndex);
    let domain = email.slice(atIndex);

    let maskedUsername;
    if (username.length > 4) {
        let first = username.slice(0, 2);
        let last = username.slice(-2);
        let middleStars = "*".repeat(username.length - 4);
        maskedUsername = first + middleStars + last;
    } else {
        let first = username.charAt(0);
        let restStars = "*".repeat(username.length - 1);
        maskedUsername = first + restStars;
    }

    return maskedUsername + domain;
}

// 3. Hiển thị kết quả
let res03 = maskEmail(email);
console.log(`email = "${email}"`);
console.log(`Kết quả: "${res03}"`);

console.log("\n================= End of assignment 03 =================");
