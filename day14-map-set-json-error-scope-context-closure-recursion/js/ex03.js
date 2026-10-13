console.log(
  "\n\n================= Begin of assignment 03 - Tính tổng doanh thu tất cả chi nhánh =================\n",
);

const salesReport = {
  branch: "Hà Nội",
  revenue: 500,
  subBranches: [
    {
      branch: "Cầu Giấy",
      revenue: 200,
      subBranches: [{ branch: "Cầu Giấy 1", revenue: 50, subBranches: [] }],
    },
    {
      branch: "Đống Đa",
      revenue: 150,
      subBranches: [],
    },
  ],
};

// Đệ quy: tổng doanh thu của 1 nhánh = revenue của nó + tổng doanh thu các nhánh con
function calculateTotalRevenue(report) {
  const subBranchesRevenue = report.subBranches.reduce(
    (sum, subBranch) => sum + calculateTotalRevenue(subBranch),
    0,
  );

  return report.revenue + subBranchesRevenue;
}

// Kiểm tra kết quả ví dụ
console.log(calculateTotalRevenue(salesReport));
// Kết quả: 900

console.log(
  calculateTotalRevenue({
    branch: "Hải Phòng",
    revenue: 100,
    subBranches: [],
  }),
);
// Kết quả: 100

console.log("\n================= End of assignment 03 =================\n");
