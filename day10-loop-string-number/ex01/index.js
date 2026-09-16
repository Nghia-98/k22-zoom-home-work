console.log("================= Begin of assignment 01 =================\n");

// 1. Khai báo số nguyên cần kiểm tra (thay đổi giá trị để test)
let n = 7;

// 2. Hàm kiểm tra số nguyên tố
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// 3. Hiển thị kết quả
let result = isPrime(n);
console.log(`Số n = ${n}`);
console.log(`Kết quả: ${result}`);

console.log("\n================= End of assignment 01 =================");
