// Đọc các tham số từ URL, vd: campaign.html?utm_source=nguyen_van_a&utm_campaign=campage_1
let params = new URLSearchParams(location.search);
let utmSource = params.get("utm_source");
let utmCampaign = params.get("utm_campaign");

let paramsInfoEl = document.getElementById("params-info");

if (!location.search) {
    // Trường hợp mở trực tiếp campaign.html, không có tham số nào
    paramsInfoEl.textContent = "Không có tham số quảng cáo";
} else {
    paramsInfoEl.innerHTML = `
        <div>Tên nguồn (utm_source): <strong>${utmSource ?? "Không có"}</strong></div>
        <div>Tên chiến dịch (utm_campaign): <strong>${utmCampaign ?? "Không có"}</strong></div>
    `;
}
