console.log("================= Begin of assignment 01 - Lọc trùng và tìm giao điểm tag sản phẩm =================\n");

const userA_searches = [
  "áo thun",
  "quần jeans",
  "áo khoác",
  "áo thun",
  "giày cừu",
];

const userB_searches = ["quần jeans", "mũ bảo hiểm", "giày cừu", "balo"];

function getUniqueTags(arr) {
  // Sử dụng Set để loại bỏ các phần tử trùng lặp và chuyển lại thành mảng
  return [...new Set(arr)];
}

// Kiểm tra kết quả ví dụ
console.log(getUniqueTags(userA_searches));
// Kết quả đầu ra: ["áo thun", "quần jeans", "áo khoác", "giày cừu"]


function getCommonTags(arr1, arr2) {
  // 1. Chuyển cả 2 mảng thành Set để loại bỏ trùng ngay từ đầu
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  
  // 2. Lọc các phần tử của set1 (đã ép về mảng) có mặt trong set2
  return [...set1].filter(item => set2.has(item));
}

// Kiểm tra kết quả ví dụ
console.log(getCommonTags(userA_searches, userB_searches)); 
// Kết quả: ["quần jeans", "giày cừu"]

console.log(getCommonTags(["áo thun", "áo thun", "balo"], ["áo thun"])); 
// Kết quả: ["áo thun"]

console.log(getCommonTags(["áo thun"], ["balo"])); 
// Kết quả: []

console.log(getCommonTags([], ["balo"])); 
// Kết quả: []

console.log("================= End of assignment 01 - Lọc trùng và tìm giao điểm tag sản phẩm =================\n");
