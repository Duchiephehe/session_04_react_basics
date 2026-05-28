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

## Bài 1.1 — Component render lần đầu

**1. Tại sao component chỉ render 1 lần?**
- Vì component LifecycleDemo chỉ là một function trả về giao diện tĩnh. Khi React gọi function này lần đầu, nó tạo ra giao diện và gắn lên màn hình (Mount). Do component không nhận dữ liệu từ bên ngoài (props) và cũng không có bộ nhớ trạng thái riêng (state), React không có lý do gì để gọi lại function này nữa.

**2. Khi nào nó sẽ render lại?**
- Nó sẽ render lại khi state nội bộ của nó thay đổi (ví dụ thông qua hàm setState) hoặc khi props (dữ liệu được truyền từ cha xuống) thay đổi.

## Bài 1.2 — Biến "bình thường" vs useState

**1. Chạy BadCounter → nhấn nút → thấy gì?**
- Khi nhấn nút Tăng, biến count tăng lên liên tục trong Console (1, 2, 3...). Tuy nhiên, số hiển thị trên giao diện vẫn đứng im ở số 0. Việc thay đổi biến thông thường không tự động báo cho React biết để cập nhật màn hình.

**2. Chạy GoodCounter → nhấn nút → thấy gì?**
- Số đếm trên giao diện màn hình lập tức cập nhật và tăng lên. Nhờ dùng useState, mỗi khi gọi hàm setCount, React nhận biết dữ liệu trạng thái đã thay đổi và tiến hành re-render lại giao diện.

**3. Mở Console → thấy log "render" mấy lần?**
- Nếu bạn mở FlowDemo và bấm chuyển bước, mỗi lần bấm bạn sẽ thấy dòng chữ "🔄 Component render!" được in ra thêm một lần. Điều này cho thấy mỗi lần state thay đổi, function component được chạy lại từ đầu.