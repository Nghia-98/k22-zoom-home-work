const REMEMBER_STORAGE_KEY = "f8-day17-ex2-remember"; // localStorage: { fullName, phone, email }
const DRAFT_STORAGE_KEY = "f8-day17-ex2-draft"; // sessionStorage: { fullName, phone, email, address }

const fullNameEl = document.getElementById("full-name");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const addressEl = document.getElementById("address");
const rememberEl = document.getElementById("remember");
const clearBtn = document.getElementById("clear-btn");
const saveNoticeEl = document.getElementById("save-notice");

function readJSON(storage, key) {
    try {
        const raw = storage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        return null;
    }
}

function getFormValues() {
    return {
        fullName: fullNameEl.value,
        phone: phoneEl.value,
        email: emailEl.value,
        address: addressEl.value,
    };
}

function saveDraftToSession() {
    const { fullName, phone, email, address } = getFormValues();
    sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({ fullName, phone, email, address }));
}

function saveRememberedToLocal() {
    const { fullName, phone, email } = getFormValues();
    localStorage.setItem(REMEMBER_STORAGE_KEY, JSON.stringify({ fullName, phone, email }));
}

function clearRememberedFromLocal() {
    localStorage.removeItem(REMEMBER_STORAGE_KEY);
}

function handleFieldInput() {
    // Địa chỉ chỉ lưu trong phiên tab hiện tại; luôn giữ bản nháp mới nhất để F5 khôi phục được.
    saveDraftToSession();

    if (rememberEl.checked) {
        saveRememberedToLocal();
    }

    saveNoticeEl.classList.add("hidden");
}

function handleRememberToggle() {
    if (rememberEl.checked) {
        saveRememberedToLocal();
    } else {
        clearRememberedFromLocal();
    }
}

function handleClearSaved() {
    clearRememberedFromLocal();
    sessionStorage.removeItem(DRAFT_STORAGE_KEY);

    fullNameEl.value = "";
    phoneEl.value = "";
    emailEl.value = "";
    addressEl.value = "";
    rememberEl.checked = false;

    saveNoticeEl.classList.remove("hidden");
}

function restoreForm() {
    const draft = readJSON(sessionStorage, DRAFT_STORAGE_KEY);
    const remembered = readJSON(localStorage, REMEMBER_STORAGE_KEY);

    // Ưu tiên bản nháp trong phiên hiện tại, sau đó mới đến dữ liệu đã ghi nhớ.
    fullNameEl.value = draft?.fullName ?? remembered?.fullName ?? "";
    phoneEl.value = draft?.phone ?? remembered?.phone ?? "";
    emailEl.value = draft?.email ?? remembered?.email ?? "";
    addressEl.value = draft?.address ?? "";

    rememberEl.checked = !!remembered;
}

[fullNameEl, phoneEl, emailEl, addressEl].forEach((el) => el.addEventListener("input", handleFieldInput));
rememberEl.addEventListener("change", handleRememberToggle);
clearBtn.addEventListener("click", handleClearSaved);

restoreForm();
