# K22 Zoom - Home Work

Monorepo bài tập cá nhân cho khoá F8 K22 Fullstack Zoom. Mỗi thư mục `dayNN-*`
hoặc `day-NN-*` là bài tập của một buổi học. Xem toàn bộ danh sách buổi học
dạng dashboard tại [index.html](index.html) (mở trực tiếp file này trong
browser).

## Cấu trúc thư mục

- `dayNN-*` (`day09` → `day17`): bài tập HTML/CSS/JS thuần, không build step.
- `day-19-react-component-props`, `day-20-...`: project Vite + React +
  Tailwind, nằm trực tiếp trong monorepo, build `dist/` được commit để nhúng
  vào `index.html` dashboard.
- `day-21-react-router` và các buổi React sau: mỗi buổi là repo GitHub riêng,
  nhúng vào monorepo dạng git submodule (xem mục dưới), deploy lên Vercel.

## Git submodule

Từ buổi 21, các buổi học React được tạo thành repo GitHub riêng rồi nhúng vào
monorepo này bằng git submodule, thay vì commit trực tiếp như day-19/20.
Submodule nghĩa là thư mục đó (`day-21-react-router/`) là **một repo Git độc
lập** (lịch sử, remote riêng), còn repo cha chỉ ghim lại nó ở một commit cụ
thể. Xem đúng commit đang ghim bằng `git submodule status`.

### Clone repo này lần đầu

Bước 1 — clone như bình thường:

```bash
git clone <url-repo-nay>
```

Lúc này thư mục `day-21-react-router/` sẽ **trống** — vì submodule chỉ là 1
con trỏ trong repo cha, clone thường không tự lấy nội dung của nó.

Bước 2 — đăng ký config submodule (đọc `.gitmodules`, thêm remote URL của
submodule vào `.git/config`):

```bash
git submodule init
```

Bước 3 — thực sự clone nội dung submodule về, checkout đúng commit mà repo
cha đang ghim:

```bash
git submodule update
```

(Có thể gộp bước 1–3 thành `git clone --recurse-submodules <url-repo-nay>`
— tự làm hết 3 bước trên trong 1 lệnh, nhưng nên hiểu rõ 3 bước trước khi
dùng bản gộp.)

### Sau khi `git pull` repo cha (có người bump submodule mới)

Submodule đã đăng ký config rồi (không cần `init` lại), chỉ cần:

```bash
git pull                # lấy pointer (commit hash) mới của submodule
```
```bash
git submodule update    # checkout submodule theo pointer mới vừa pull về
```

Có thể gộp 2 lệnh trên thành 1:

```bash
git pull --recurse-submodules
```

### Sửa code trong một submodule (ví dụ `day-21-react-router/`)

Submodule là repo riêng, nên commit/push như một repo bình thường:

```bash
cd day-21-react-router
git add .
git commit -m "..."
git push
```

Sau đó quay ra root để ghim lại pointer mới (repo cha cần biết submodule đã
đổi sang commit nào):

```bash
cd ..
git add day-21-react-router
git commit -m "bump day-21-react-router submodule"
git push
```

### Lấy code mới nhất của submodule từ remote (bỏ qua pointer đang ghim)

```bash
git submodule update --remote day-21-react-router   # 1 submodule cụ thể
git submodule update --remote --recursive            # tất cả submodule
```

Dùng khi muốn kéo thẳng commit mới nhất trên remote branch của submodule,
khác với `git submodule update` (không `--remote`) chỉ đưa submodule về đúng
commit mà repo cha đang ghim.

### Thêm một buổi học mới dưới dạng submodule

```bash
git submodule add <url-repo-con> day-NN-ten-buoi
git add .gitmodules day-NN-ten-buoi
git commit -m "add day-NN-ten-buoi as submodule"
git push
```
