const themeToggleBtn = document.getElementById("theme-toggle-btn");

themeToggleBtn.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");
    themeToggleBtn.textContent = isDarkMode ? "Chế độ sáng" : "Chế độ tối";
});
