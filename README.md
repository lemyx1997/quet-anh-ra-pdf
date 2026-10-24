# Quét Ảnh Ra PDF

Ứng dụng web nhỏ biến ảnh chụp tài liệu thành file PDF gọn, dễ đọc, lấy cảm hứng từ cách làm của các app quét tài liệu như CamScanner. Mọi xử lý diễn ra ngay trong trình duyệt: ảnh không được gửi lên máy chủ nào.

## Tính năng

- **Chụp nhiều trang liên tục**: mở camera ngay trong app, lật trang và bấm chụp liên tục, mỗi lần chụp tự cắt thành một trang. Nơi không mở được camera trực tiếp (ví dụ trong Claude), app dùng camera của máy và sau mỗi ảnh có nút “Chụp tiếp”.
- **Thêm ảnh**: chọn nhiều ảnh cùng lúc, kéo thả hoặc dán (Ctrl+V).
- **Tự tìm mép giấy** và nắn thẳng trang chụp nghiêng.
- **Cắt theo tứ giác tuỳ ý**:
  - kéo từng góc (có kính lúp phóng to để đặt chính xác);
  - kéo nút giữa cạnh để dời cả cạnh, kéo bên trong để dời cả khung;
  - “Vẽ khung mới”: chạm 4 điểm theo thứ tự bất kỳ;
  - trên máy tính: bấm chọn góc rồi dùng phím mũi tên (giữ Shift để nhích nhanh), Ctrl+Z để hoàn tác.
- **Khổ trang sau khi cắt**: Tự động, A4, Thẻ / CCCD, Vuông.
- **Cắt thêm vùng**: một ảnh chứa nhiều tài liệu (hai trang sách, nhiều hoá đơn) cắt thành nhiều trang.
- **Kiểu màu**: Rõ nét (làm trắng nền, khử bóng), Ảnh gốc, Xám, Đen trắng; áp một kiểu cho mọi trang.
- **Quản lý trang**: đổi thứ tự, xoay, xoá (có hoàn tác).
- **Xuất PDF**: khổ A4 hoặc theo ảnh, có hoặc không lề, ba mức độ nét (Nhẹ để gửi Zalo, Vừa, Nét nhất để in).
- **Xuất ảnh dài**: ghép mọi trang thành một ảnh JPG dọc để gửi qua tin nhắn. Khi quá nhiều trang, ảnh tự thu nhỏ để điện thoại vẫn mở được.

Bản web: https://lemyx1997.github.io/quet-anh-ra-pdf/

## Cách dùng

Mở `docs/index.html` bằng trình duyệt (Chrome, Edge, Safari, Firefox). Cần mạng để tải công cụ tạo PDF và phông chữ lần đầu.

`index.html` ở thư mục gốc là bản dùng cho Claude Artifact; `docs/index.html` là bản đầy đủ chạy độc lập (dùng được với GitHub Pages).

## Giấy phép

Mã nguồn của app phát hành theo giấy phép MIT (xem `LICENSE`). Thư viện và phông chữ bên ngoài giữ giấy phép riêng, liệt kê trong `THIRD_PARTY_NOTICES.md`. Dự án không dùng mã nguồn, hình ảnh hay thương hiệu của CamScanner.
