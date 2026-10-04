const MY_NAME = "nghia";

// Lưu lại các thông tin BOM đã đọc được, dùng để tạo fingerprint ở phần sau
let currentInfo = {};

// ===== 1. Đọc tên trình duyệt từ navigator.userAgent =====
function getBrowserName() {
    let ua = navigator.userAgent;
    if (ua.includes("Edg")) return "Microsoft Edge";
    if (ua.includes("Chrome")) return "Google Chrome";
    if (ua.includes("Firefox")) return "Mozilla Firefox";
    if (ua.includes("Safari")) return "Safari";
    return "Không xác định";
}

// ===== 2. Đọc tên hệ điều hành từ navigator.userAgent =====
function getOSName() {
    let ua = navigator.userAgent;
    if (ua.includes("Windows")) return "Windows";
    if (ua.includes("Mac")) return "macOS";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
    if (ua.includes("Linux")) return "Linux";
    return "Không xác định";
}

// ===== 3. Hiển thị trạng thái Online/Offline =====
function renderOnlineStatus() {
    let dot = document.getElementById("online-dot");
    let text = document.getElementById("online-text");

    let isOnline = navigator.onLine;
    dot.className = isOnline ? "w-3 h-3 rounded-full bg-green-500" : "w-3 h-3 rounded-full bg-red-500";
    text.textContent = isOnline ? "Online" : "Offline";
    currentInfo.online = isOnline ? "Online" : "Offline";
}
window.addEventListener("online", renderOnlineStatus);
window.addEventListener("offline", renderOnlineStatus);

// ===== 4. Hiển thị vị trí người dùng (yêu cầu cho phép định vị) =====
function renderLocation() {
    let el = document.getElementById("info-location");

    if (!navigator.geolocation) {
        el.textContent = "Trình duyệt không hỗ trợ định vị";
        currentInfo.location = "Không hỗ trợ";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            let lat = position.coords.latitude.toFixed(4);
            let lng = position.coords.longitude.toFixed(4);
            el.textContent = `${lat}, ${lng}`;
            currentInfo.location = `${lat}, ${lng}`;
        },
        () => {
            el.textContent = "Không lấy được vị trí (bạn đã từ chối quyền truy cập)";
            currentInfo.location = "Không xác định";
        }
    );
}

// ===== 5. Hiển thị toàn bộ thông tin BOM còn lại =====
function renderBomInfo() {
    let browser = getBrowserName();
    let os = getOSName();
    let languages = navigator.languages.join(", ");
    let screenSize = `${screen.width} x ${screen.height}`;
    let orientation = screen.orientation ? screen.orientation.type : "Không xác định";

    document.getElementById("info-browser").textContent = browser;
    document.getElementById("info-os").textContent = os;
    document.getElementById("info-languages").textContent = languages;
    document.getElementById("info-screen-size").textContent = screenSize;
    document.getElementById("info-orientation").textContent = orientation;

    currentInfo.browser = browser;
    currentInfo.os = os;
    currentInfo.languages = languages;
    currentInfo.screenSize = screenSize;
    currentInfo.orientation = orientation;

    renderOnlineStatus();
    renderLocation();
}
renderBomInfo();

// ===== 6. Banner quảng cáo: gắn utm_source, utm_campaign vào link =====
document.getElementById("banner-link").href =
    `campaign.html?utm_source=${MY_NAME}&utm_campaign=campage_1`;

// ===== 7. Chuyển đổi giữa view "Trang chủ" và view "Fingerprinting" =====
let homeView = document.getElementById("home-view");
let fingerprintView = document.getElementById("fingerprint-view");

function showHomeView() {
    homeView.classList.remove("hidden");
    fingerprintView.classList.add("hidden");
}

function showFingerprintView(state) {
    homeView.classList.add("hidden");
    fingerprintView.classList.remove("hidden");

    // Tạo fingerprint bằng cách nối chuỗi các thông tin đã lưu trong state
    let fingerprint =
        state.online + " - " +
        state.browser + " - " +
        state.os + " - " +
        state.languages + " - " +
        state.screenSize + " - " +
        state.orientation + " - " +
        state.location;

    document.getElementById("fingerprint-text").textContent = fingerprint;
}

// Lưu state ban đầu cho trang chủ, để khi bấm Back/Forward về đây vẫn nhận diện đúng
history.replaceState({ view: "home" }, "", window.location.pathname);

document.getElementById("go-fingerprint-btn").addEventListener("click", () => {
    let state = { view: "fingerprint", ...currentInfo };
    // Cập nhật URL mà không reload trang (điều hướng kiểu SPA)
    history.pushState(state, "Fingerprinting", "fingerprinting.html");
    // Lấy lại thông tin đã truyền thông qua history.state
    showFingerprintView(history.state);
});

document.getElementById("back-home-btn").addEventListener("click", () => {
    history.back();
});

// Lắng nghe nút Back/Forward của trình duyệt
window.addEventListener("popstate", (event) => {
    let state = event.state;
    if (!state || state.view === "home") {
        showHomeView();
    } else if (state.view === "fingerprint") {
        showFingerprintView(state);
    }
});
