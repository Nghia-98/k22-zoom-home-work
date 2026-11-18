# Day 20 - React Mini Cart

Bài tập: [https://f8.edu.vn/assignment-classes/240](https://f8.edu.vn/assignment-classes/240)

Module Mini Cart cho website E-commerce: xem danh sách sản phẩm, thêm vào giỏ,
tăng/giảm số lượng, xoá mặt hàng, tính tổng tiền.

## Cài đặt & chạy dự án

```bash
nvm use        # dùng đúng Node version khai báo trong .nvmrc
npm install
npm run dev     # chạy dev server, mở link hiện ra trên terminal
```

Build ra bản tĩnh (dùng để deploy hoặc nhúng vào dashboard tổng):

```bash
npm run build    # sinh ra thư mục dist/
npm run preview  # xem thử bản build vừa tạo
```

## Quản lý state giỏ hàng

State `cartItems` (mảng các mặt hàng trong giỏ) được khai báo bằng `useState`
**tại component `App`** ([src/App.jsx](src/App.jsx)). `App` giữ 4 handler
(`handleAddToCart`, `handleIncrease`, `handleDecrease`, `handleRemove`), mỗi
handler tạo **mảng/object mới** (không mutate `cartItems` cũ), rồi truyền
xuống `Cart` qua props. Các component con (`ProductList`, `ProductCard`,
`Cart`, `CartItem`) đều **không tự giữ state giỏ hàng** — chỉ nhận dữ liệu
qua props và gọi callback để báo ngược lên `App` khi người dùng tương tác.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
