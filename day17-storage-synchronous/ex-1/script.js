const CART_STORAGE_KEY = "f8-day17-ex1-cart";

// Dữ liệu lấy từ https://dummyjson.com/products
const products = [
    { id: 1, name: "Essence Mascara Lash Princess", image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp", price: 9.99 },
    { id: 2, name: "Eyeshadow Palette with Mirror", image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp", price: 19.99 },
    { id: 3, name: "Powder Canister", image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp", price: 14.99 },
    { id: 4, name: "Red Lipstick", image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp", price: 12.99 },
    { id: 5, name: "Red Nail Polish", image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp", price: 8.99 },
    { id: 6, name: "Calvin Klein CK One", image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp", price: 49.99 },
    { id: 7, name: "Chanel Coco Noir Eau De", image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp", price: 129.99 },
    { id: 8, name: "Dior J'adore", image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp", price: 89.99 },
    { id: 9, name: "Dolce Shine Eau de", image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp", price: 69.99 },
    { id: 10, name: "Gucci Bloom Eau de", image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp", price: 79.99 },
    { id: 11, name: "Annibale Colombo Bed", image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp", price: 1899.99 },
    { id: 12, name: "Annibale Colombo Sofa", image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp", price: 2499.99 },
    { id: 13, name: "Bedside Table African Cherry", image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp", price: 299.99 },
    { id: 14, name: "Knoll Saarinen Executive Conference Chair", image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp", price: 499.99 },
    { id: 15, name: "Wooden Bathroom Sink With Mirror", image: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp", price: 799.99 },
];

// cart: mảng các object { id, name, price, quantity }
let cart = loadCart();

function loadCart() {
    try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        return [];
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function formatCurrency(value) {
    return "$" + value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const item = cart.find((i) => i.id === productId);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }

    saveCart();
    renderCart();
}

function increaseQuantity(productId) {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;
    item.quantity += 1;
    saveCart();
    renderCart();
}

function decreaseQuantity(productId) {
    const item = cart.find((i) => i.id === productId);
    if (!item || item.quantity <= 1) return;
    item.quantity -= 1;
    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter((i) => i.id !== productId);
    saveCart();
    renderCart();
}

function renderProducts() {
    const container = document.getElementById("product-list");

    if (products.length === 0) {
        container.innerHTML = `<p class="text-gray-500 col-span-2">Không có sản phẩm nào.</p>`;
        return;
    }

    container.innerHTML = products
        .map(
            (p) => `
        <div class="border rounded-lg p-3 flex flex-col">
            <img src="${p.image}" alt="${p.name}" class="w-full h-32 object-contain rounded-md mb-2" />
            <p class="text-xs text-gray-400">#${p.id}</p>
            <p class="font-medium text-gray-800 flex-1">${p.name}</p>
            <p class="text-red-600 font-semibold mb-2">${formatCurrency(p.price)}</p>
            <button
                onclick="addToCart(${p.id})"
                class="bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md py-1.5"
            >
                Thêm vào giỏ hàng
            </button>
        </div>`
        )
        .join("");
}

function renderCart() {
    const listEl = document.getElementById("cart-list");
    const emptyEl = document.getElementById("cart-empty");
    const totalQtyEl = document.getElementById("cart-total-qty");
    const totalPriceEl = document.getElementById("cart-total-price");

    if (cart.length === 0) {
        listEl.innerHTML = "";
        emptyEl.classList.remove("hidden");
    } else {
        emptyEl.classList.add("hidden");
        listEl.innerHTML = cart
            .map((item) => {
                const subtotal = item.price * item.quantity;
                const disableDecrease = item.quantity <= 1;
                return `
                <div class="border rounded-md p-3">
                    <div class="flex justify-between">
                        <p class="font-medium text-gray-800">${item.name}</p>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-sm">Xóa</button>
                    </div>
                    <p class="text-sm text-gray-500">${formatCurrency(item.price)} / sản phẩm</p>
                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center gap-2">
                            <button
                                onclick="decreaseQuantity(${item.id})"
                                ${disableDecrease ? "disabled" : ""}
                                class="w-7 h-7 rounded border text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
                            >-</button>
                            <span class="w-6 text-center">${item.quantity}</span>
                            <button
                                onclick="increaseQuantity(${item.id})"
                                class="w-7 h-7 rounded border text-gray-700"
                            >+</button>
                        </div>
                        <p class="font-semibold text-gray-800">${formatCurrency(subtotal)}</p>
                    </div>
                </div>`;
            })
            .join("");
    }

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalQtyEl.textContent = totalQuantity;
    totalPriceEl.textContent = formatCurrency(totalPrice);
}

renderProducts();
renderCart();
