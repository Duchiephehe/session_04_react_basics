# Answers

## Bài 0.1 — Chạy React đầu tiên

**1. File `.jsx` khác gì file `.js`?**
- `.js` là file JavaScript thông thường, chỉ chứa code JavaScript tiêu chuẩn.
- `.jsx` (JavaScript XML) là phần mở rộng cú pháp của React, cho phép bạn viết mã giống HTML trực tiếp bên trong code JavaScript. Điều này giúp cấu trúc giao diện (UI) dễ đọc và dễ hình dung hơn khi viết React Component. Dưới luồng chạy, các đoạn code giống HTML trong JSX sẽ được chuyển đổi thành các lệnh gọi hàm JavaScript (ví dụ: `React.createElement`).

**2. Tại sao phải `export default App`?**
- Từ khóa `export default` cho phép bạn xuất (export) hàm (Component) `App` ra bên ngoài để các file khác có thể nạp (import) và sử dụng nó. Trong ứng dụng React (như được tạo bởi Vite), file `main.jsx` cần import component `App` để render ra giao diện, do đó ta phải export nó. 

**3. Thử xóa `export default` → chuyện gì xảy ra?**
- Nếu xóa `export default`, project sẽ bị báo lỗi compile (biên dịch) hoặc lỗi hiển thị trắng trang.
- Lý do là file `main.jsx` đang cố gắng import default từ file `App.jsx` (`import App from './App.jsx'`), nhưng vì bạn đã xóa export, nó sẽ không tìm thấy component nào để import, dẫn đến báo lỗi không tìm thấy module được export.
