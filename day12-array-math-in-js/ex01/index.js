console.log("================= Begin of assignment 01 - Random màu nền bằng mã HEX =================\n");

// 1. Hàm sinh mã màu HEX ngẫu nhiên
function generateRandomHexColor() {
    let hexDigits = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexDigits.length);
        color += hexDigits[randomIndex];
    }

    return color;
}

// 2. Hiển thị kết quả
console.log(generateRandomHexColor());
console.log(generateRandomHexColor());
console.log(generateRandomHexColor());

console.log("\n================= End of assignment 01 =================");
