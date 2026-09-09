console.log("\n================= Begin of assigment 01 ================= \n")
// Khai báo điểm 3 môn
let toan = 9;
let van = 8;
let anh = 7; 

// 1. Kiểm tra dữ liệu hợp lệ (từ 0 đến 10)
if (
    isNaN(toan) || isNaN(van) || isNaN(anh) ||
    toan < 0 || toan > 10 ||
    van < 0 || van > 10 ||
    anh < 0 || anh > 10
) {
    console.log("Dữ liệu không hợp lệ.");
} else {
    // 2. Tính điểm trung bình
    const dtb = (toan + van + anh) / 3;

    // 3. Tìm điểm của môn thấp nhất để xét điều kiện khống chế
    const minDiem = Math.min(toan, van, anh);

    // 4. Xét loại học lực dựa theo ĐTB và điểm môn thấp nhất
    let hocLuc = "";
    if (dtb >= 9.0 && minDiem >= 8.0) {
        hocLuc = "Xuất sắc";
    } else if (dtb >= 8.0 && minDiem >= 6.5) {
        hocLuc = "Giỏi";
    } else if (dtb >= 6.5 && minDiem >= 5.0) {
        hocLuc = "Khá";
    } else if (dtb >= 5.0 && minDiem >= 3.5) {
        hocLuc = "Trung bình";
    } else {
        hocLuc = "Yếu";
    }

    // 5. Hiển thị kết quả
    console.log(`Điểm toán: ${toan}`);
    console.log(`Điểm văn: ${van}`);
    console.log(`Điểm anh: ${anh}`);

    console.log(`Điểm trung bình: ${dtb.toFixed(2)}`);
    console.log(`Học lực: ${hocLuc}`);
}
console.log("\n================= End of assigment 01 ================= \n")