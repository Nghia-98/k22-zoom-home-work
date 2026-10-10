console.log("================= Begin of assignment 02 - Bộ công cụ xử lý Thời gian =================\n");

// 1. timeAgo: thời gian tương đối so với hiện tại
function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now - date;
    const diffMinutes = diffMs / (60 * 1000);

    if (diffMinutes < 1) return "Vừa xong";

    if (diffMinutes < 60) {
        return `${Math.floor(diffMinutes)} phút trước`;
    }

    const diffHours = diffMinutes / 60;
    if (diffHours < 24) {
        return `${Math.floor(diffHours)} giờ trước`;
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// 2. getCountdown: số ngày/giờ/phút/giây còn lại đến một thời điểm trong tương lai
function getCountdown(targetDateString) {
    const now = new Date();
    const target = new Date(targetDateString);
    const diffMs = Math.max(0, target - now);

    const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diffMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diffMs % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diffMs % (60 * 1000)) / 1000);

    return { days, hours, minutes, seconds };
}

// 3. isWeekend: ngày truyền vào có phải Thứ Bảy hoặc Chủ Nhật không
function isWeekend(dateString) {
    const day = new Date(dateString).getDay(); // 0: Chủ Nhật, 6: Thứ Bảy
    return day === 0 || day === 6;
}

// 4. Hiển thị kết quả
console.log("--- timeAgo ---");
console.log(timeAgo("2026-09-20T14:59:30+07:00"));
console.log(timeAgo("2026-09-20T14:30:00+07:00"));
console.log(timeAgo("2026-09-20T10:00:00+07:00"));
console.log(timeAgo("2026-09-18T08:00:00+07:00"));

console.log("\n--- getCountdown ---");
const countdown = getCountdown("2026-11-21T15:30:20+07:00");
console.log(countdown);

console.log("\n--- isWeekend ---");
console.log(isWeekend("2026-09-19"));
console.log(isWeekend("2026-09-20"));
console.log(isWeekend("2026-09-21"));

console.log("\n================= End of assignment 02 =================");
