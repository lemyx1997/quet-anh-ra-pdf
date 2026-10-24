# Thành phần bên thứ ba

App không chép mã của bên thứ ba vào kho này; các thành phần dưới đây được tải từ CDN khi chạy.

| Thành phần | Phiên bản | Nguồn tải | Giấy phép | Dùng thương mại |
|---|---|---|---|---|
| jsPDF (tạo file PDF; bản UMD gói kèm fflate, cũng MIT) | 2.5.1 | cdnjs.cloudflare.com | MIT, © 2010-2021 James Hall, yWorks GmbH và các tác giả khác | Được |
| Be Vietnam Pro (phông chữ) | Google Fonts | fonts.googleapis.com | SIL Open Font License 1.1 | Được |
| Lexend (phông chữ) | Google Fonts | fonts.googleapis.com | SIL Open Font License 1.1 | Được |

Ghi chú:

- Lời ghi bản quyền MIT của jsPDF nằm sẵn ở đầu file thư viện tải từ CDN.
- Thuật toán tìm mép giấy (ngưỡng Otsu, bao lồi), nắn phối cảnh (homography) và làm phẳng ánh sáng là các phương pháp toán học phổ biến, được viết lại hoàn toàn trong `index.html`.
- Nội dung trang mẫu (trường, tên người, lịch họp) là hư cấu.
- `http-server` chỉ dùng để chạy thử trên máy, không nằm trong app.
