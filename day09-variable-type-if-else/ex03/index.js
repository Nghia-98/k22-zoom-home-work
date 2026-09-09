console.log("================= Begin of assignment 03 =================\n");

// 1. Khai báo số km đi được (thay đổi giá trị để test)
let distance = 15; // Ví dụ: 15 km
let totalFee = 0;

// 2. Kiểm tra dữ liệu đầu vào
if (isNaN(distance) || distance <= 0) {
    console.log("Lỗi: Số km không hợp lệ. Vui lòng nhập một số lớn hơn 0.");
} else {
    // 3. Tính tiền cước theo các mốc khoảng cách
    if (distance <= 1) {
        totalFee = distance * 15000;
    } else if (distance <= 5) {
        totalFee = 15000 + (distance - 1) * 13500;
    } else {
        totalFee = 15000 + (4 * 13500) + (distance - 5) * 11000;
    }

    // 4. Áp dụng giảm giá 10% nếu đi trên 12 km
    if (distance > 12) {
        totalFee = totalFee * 0.9;
    }

    // 5. Hiển thị kết quả ngay trong khối else
    let formattedFare = totalFee.toLocaleString("vi-VN");
    console.log(`Số km đi được: ${distance} km`);
    console.log(`Tổng tiền cước: ${formattedFare} VNĐ`);
}

console.log("\n================= End of assignment 03 ================= ");