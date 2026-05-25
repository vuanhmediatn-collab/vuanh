# Hướng dẫn sử dụng Decap CMS

Website đã có CMS tại thư mục `admin/` và dữ liệu nội dung nằm trong `content/`.

## Vào CMS

Sau khi website được deploy, truy cập:

```text
https://ten-mien-cua-website/admin/
```

Đăng nhập bằng tài khoản GitHub có quyền sửa repo `vuanhmediatn-collab/vuanh`.

Nếu CMS yêu cầu cấu hình đăng nhập GitHub/OAuth cho domain đang dùng, cần cấu hình OAuth theo domain deploy hiện tại rồi quay lại `/admin/`.

## Sửa chữ trên website

Vào collection `Homepage` để sửa:

- Hero headline, subtext, CTA.
- Các headline và paragraph của từng section.
- Service cards.
- Portfolio intro và project cards.
- Process steps.
- Founder/team text.
- Form intro, button và microcopy cuối form.

Headline có thể xuống dòng trực tiếp trong ô nhập. Mỗi dòng sẽ được render thành một dòng headline trên website.

## Thêm hoặc sửa sản phẩm

Vào collection `Products`, mở `Danh sách sản phẩm`.

Mỗi sản phẩm có các trường:

- `Hiển thị`: bật/tắt sản phẩm trên website.
- `Loại sản phẩm`: `Video`, `Hình ảnh`, hoặc `Khách hàng thường xuyên`.
- `Title`: tên sản phẩm.
- `Mô tả ngắn`: đoạn mô tả hiển thị trên card.
- `Client`, `Year`: có thể để trống.
- `Thumbnail`: ảnh đại diện.
- `Video URL`: link video, chỉ cần nhập cho sản phẩm loại video.

Bộ lọc trên website vẫn dùng 4 nhóm: `Tất cả`, `Video`, `Hình ảnh`, `Khách hàng thường xuyên`.

## Upload ảnh

Trong các trường ảnh của CMS, chọn upload ảnh mới. Ảnh sẽ được lưu vào:

```text
assets/uploads/
```

CMS sẽ tự ghi đường dẫn dạng:

```text
/assets/uploads/ten-file.jpg
```

Các ảnh cũ trong `assets/hero/`, `assets/portfolio/`, `assets/products/`, `assets/founder/`, `assets/ui/` vẫn được giữ nguyên.

## Đổi link video

Vào `Products`, chọn sản phẩm video cần sửa, cập nhật trường `Video URL`, rồi lưu. Website sẽ dùng link mới cho nút `Xem video`.

## Sửa thông tin liên hệ và logo

Vào collection `Settings` để sửa:

- Logo.
- Brand name.
- Tagline dưới logo.
- Email nhận form.
- Phone, địa chỉ.
- Social links.
- CTA text trên menu.
- Mô tả footer.

Email trong `Settings` là email được dùng khi khách gửi form liên hệ.

## Lưu xong website cập nhật thế nào

Khi bấm `Save`/`Publish` trong CMS, Decap CMS sẽ commit thay đổi vào branch `main` của GitHub.

Nếu repo đang nối với Vercel, Vercel sẽ tự deploy lại sau commit. Sau khi deploy xong, website sẽ đọc các file JSON mới trong `content/` và hiển thị nội dung mới.

## Xem local

Không nên mở trực tiếp `index.html` bằng `file://` để kiểm tra CMS content, vì trình duyệt có thể chặn `fetch()` file JSON.

Cách kiểm tra local:

```bash
cd /Users/vuanhproduction/Documents/WEBSITE/VuAnh-Media
python3 -m http.server 4173
```

Sau đó mở:

```text
http://localhost:4173/
http://localhost:4173/admin/
```

Nếu vẫn mở bằng file trực tiếp và JSON bị chặn, website vẫn có fallback trong HTML/JS nên không bị trắng trang.
