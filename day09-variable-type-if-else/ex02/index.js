console.log("================= Begin of assignment 02 =================\n");

// 1. Khai báo số nguyên cần kiểm tra (thay đổi giá trị để test)
let dayNumber = 3;
let dayName = "";

if (isNaN(dayNumber)) {
    console.log("Dữ liệu không hợp lệ.")
} else {
    // 2. Kiểm tra và gán ngày tương ứng
    switch (dayNumber) {
        case 1:
            dayName = "Chủ Nhật";
            break;
        case 2:
            dayName = "Thứ Hai";
            break;
        case 3:
            dayName = "Thứ Ba";
            break;
        case 4:
            dayName = "Thứ Tư";
            break;
        case 5:
            dayName = "Thứ Năm";
            break;
        case 6:
            dayName = "Thứ Sáu";
            break;
        case 7:
            dayName = "Thứ Bảy";
            break;
        default:
            dayName = "Không hợp lệ.";
            break;
    }

    // 3. Hiển thị kết quả
    console.log(`Số nhập vào: ${dayNumber}`);
    console.log(`Kết quả: ${dayName}`);

    console.log("\n================= End of assignment 02 ================= ");
}