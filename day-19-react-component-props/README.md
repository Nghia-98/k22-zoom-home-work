# Day 19 - React Components & Props

Bài tập: [https://f8.edu.vn/assignment-classes/237](https://f8.edu.vn/assignment-classes/237)

## Yêu cầu phiên bản Node.js

Project này yêu cầu Node.js theo range sau (khai báo trong `engines` của `package.json`):

```
^20.19.0 || >=22.12.0
```

Đây là ngưỡng tối thiểu mà Vite 8 (bản đang dùng trong project) yêu cầu để chạy ổn định. Nếu Node không nằm trong range này, `npm install` hoặc `npm run <script>` sẽ báo lỗi `EBADENGINE` và dừng ngay (do có `engine-strict=true` trong `.npmrc`), tránh gặp lỗi khó hiểu về sau.

Project cũng có file `.nvmrc` ghi sẵn version cụ thể (`22.23.3`) để tiện dùng [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use        # tự đọc version từ .nvmrc
npm install
npm run dev
```

Nếu chưa cài version đó: `nvm install` (không cần truyền số, nvm tự đọc `.nvmrc`).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
