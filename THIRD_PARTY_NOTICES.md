# Thành phần bên thứ ba

App không chép mã của bên thứ ba vào kho này. Các thành phần dưới đây được tải từ CDN khi chạy.

| Thành phần | Phiên bản | Nguồn tải | Giấy phép | Dùng thương mại |
|---|---|---|---|---|
| jsPDF (tạo file PDF; bản UMD gói kèm fflate, cũng MIT) | 2.5.1 | cdnjs.cloudflare.com | MIT, © 2010-2021 James Hall, yWorks GmbH và các tác giả khác | Được |
| Tesseract.js (đọc chữ trong ảnh) cùng lõi Tesseract | 5.1.1 | cdn.jsdelivr.net | Apache License 2.0 | Được |
| Dữ liệu ngôn ngữ tiếng Việt và tiếng Anh của Tesseract (@tesseract.js-data) | 4.0.0 | cdn.jsdelivr.net | Apache License 2.0 | Được |
| Be Vietnam Pro (phông chữ) | Google Fonts | fonts.googleapis.com | SIL Open Font License 1.1 | Được |
| Lexend (phông chữ) | Google Fonts | fonts.googleapis.com | SIL Open Font License 1.1 | Được |

Ghi chú:

- Lời ghi bản quyền của jsPDF và Tesseract.js nằm sẵn trong file thư viện tải từ CDN; app không sửa hay phân phối lại các file này.
- Tesseract.js chỉ được tải khi người dùng bấm “Lấy chữ”.
- Các thuật toán sau được viết lại hoàn toàn trong `index.html`:
  - tìm mép giấy (ngưỡng Otsu, bao lồi);
  - nắn phối cảnh (homography);
  - làm phẳng ánh sáng;
  - tìm gáy sách;
  - so khung hình để tự chụp.
  Đây đều là các phương pháp toán học phổ biến.
- Biểu tượng app (`icon-*.png`) do dự án tự vẽ.
- Nội dung trang mẫu (trường, tên người, lịch họp) là hư cấu.
- Mật khẩu PDF dùng mã hoá có sẵn của jsPDF (RC4), đủ để chặn người mở tình cờ, không phải bảo mật cao.
