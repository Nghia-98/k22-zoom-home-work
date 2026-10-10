const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("toggle-password-btn");

togglePasswordBtn.addEventListener("click", () => {
    const isPasswordHidden = passwordInput.type === "password";
    passwordInput.type = isPasswordHidden ? "text" : "password";
    togglePasswordBtn.textContent = isPasswordHidden ? "Ẩn" : "Hiện";
});
