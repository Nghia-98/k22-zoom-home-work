const PRODUCTS_API_URL = "https://dummyjson.com/products";

const statusAreaEl = document.getElementById("status-area");
const statusTextEl = document.getElementById("status-text");
const retryBtn = document.getElementById("retry-btn");
const productListEl = document.getElementById("product-list");
const detailModalEl = document.getElementById("detail-modal");
const detailContentEl = document.getElementById("detail-content");
const detailCloseBtn = document.getElementById("detail-close");

let products = [];
let isLoading = false;

function formatCurrency(value) {
    return "$" + value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getProductImage(product) {
    return product.thumbnail || product.images?.[0] || "";
}

async function fetchProducts() {
    if (isLoading) return;
    isLoading = true;

    productListEl.innerHTML = "";
    statusAreaEl.classList.remove("hidden");
    retryBtn.classList.add("hidden");
    statusTextEl.textContent = "Đang tải...";

    try {
        const response = await fetch(PRODUCTS_API_URL);
        if (!response.ok) throw new Error("Request thất bại với status " + response.status);

        const data = await response.json();
        products = data.products || [];

        if (products.length === 0) {
            statusAreaEl.classList.remove("hidden");
            statusTextEl.textContent = "Không có sản phẩm nào.";
        } else {
            statusAreaEl.classList.add("hidden");
            renderProducts();
        }
    } catch (error) {
        statusAreaEl.classList.remove("hidden");
        statusTextEl.textContent = "Không tải được danh sách sản phẩm. Vui lòng thử lại.";
        retryBtn.classList.remove("hidden");
    } finally {
        isLoading = false;
    }
}

function renderProducts() {
    productListEl.innerHTML = products
        .map(
            (p) => `
        <div
            class="border rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-md transition"
            onclick="openDetail(${p.id})"
        >
            <img src="${getProductImage(p)}" alt="${p.title}" class="w-full h-32 object-contain rounded-md mb-2" />
            <p class="text-xs text-gray-400">#${p.id} · ${p.category}</p>
            <p class="font-medium text-gray-800 flex-1">${p.title}</p>
            <p class="text-sm text-gray-500">⭐ ${p.rating} · Tồn kho: ${p.stock}</p>
            <p class="text-red-600 font-semibold">${formatCurrency(p.price)}</p>
        </div>`
        )
        .join("");
}

function openDetail(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    detailContentEl.innerHTML = `
        <img src="${getProductImage(product)}" alt="${product.title}" class="w-full h-48 object-contain rounded-md mb-3" />
        <p class="text-xs text-gray-400">#${product.id} · ${product.category}</p>
        <h3 class="text-lg font-semibold text-gray-800">${product.title}</h3>
        <p class="text-red-600 font-semibold text-lg">${formatCurrency(product.price)}</p>
        <p class="text-sm text-gray-500 mb-2">⭐ ${product.rating} · Tồn kho: ${product.stock}</p>
        <p class="text-gray-700 text-sm">${product.description}</p>
    `;
    detailModalEl.classList.replace("hidden", "flex");
}

function closeDetail() {
    detailModalEl.classList.replace("flex", "hidden");
}

retryBtn.addEventListener("click", fetchProducts);
detailCloseBtn.addEventListener("click", closeDetail);
detailModalEl.addEventListener("click", (event) => {
    if (event.target === detailModalEl) closeDetail();
});

fetchProducts();
