# Answers

## BÃ i 0.1 â€” Cháº¡y React Ä‘áº§u tiÃªn

**1. File `.jsx` khÃ¡c gÃ¬ file `.js`?**
- `.js` lÃ  file JavaScript thÃ´ng thÆ°á»ng, chá»‰ chá»©a code JavaScript tiÃªu chuáº©n.
- `.jsx` (JavaScript XML) lÃ  pháº§n má»Ÿ rá»™ng cÃº phÃ¡p cá»§a React, cho phÃ©p báº¡n viáº¿t mÃ£ giá»‘ng HTML trá»±c tiáº¿p bÃªn trong code JavaScript. Äiá»u nÃ y giÃºp cáº¥u trÃºc giao diá»‡n (UI) dá»… Ä‘á»c vÃ  dá»… hÃ¬nh dung hÆ¡n khi viáº¿t React Component. DÆ°á»›i luá»“ng cháº¡y, cÃ¡c Ä‘oáº¡n code giá»‘ng HTML trong JSX sáº½ Ä‘Æ°á»£c chuyá»ƒn Ä‘á»•i thÃ nh cÃ¡c lá»‡nh gá»i hÃ m JavaScript (vÃ­ dá»¥: `React.createElement`).

**2. Táº¡i sao pháº£i `export default App`?**
- Tá»« khÃ³a `export default` cho phÃ©p báº¡n xuáº¥t (export) hÃ m (Component) `App` ra bÃªn ngoÃ i Ä‘á»ƒ cÃ¡c file khÃ¡c cÃ³ thá»ƒ náº¡p (import) vÃ  sá»­ dá»¥ng nÃ³. Trong á»©ng dá»¥ng React (nhÆ° Ä‘Æ°á»£c táº¡o bá»Ÿi Vite), file `main.jsx` cáº§n import component `App` Ä‘á»ƒ render ra giao diá»‡n, do Ä‘Ã³ ta pháº£i export nÃ³. 

**3. Thá»­ xÃ³a `export default` â†’ chuyá»‡n gÃ¬ xáº£y ra?**
- Náº¿u xÃ³a `export default`, project sáº½ bá»‹ bÃ¡o lá»—i compile (biÃªn dá»‹ch) hoáº·c lá»—i hiá»ƒn thá»‹ tráº¯ng trang.
- LÃ½ do lÃ  file `main.jsx` Ä‘ang cá»‘ gáº¯ng import default tá»« file `App.jsx` (`import App from './App.jsx'`), nhÆ°ng vÃ¬ báº¡n Ä‘Ã£ xÃ³a export, nÃ³ sáº½ khÃ´ng tÃ¬m tháº¥y component nÃ o Ä‘á»ƒ import, dáº«n Ä‘áº¿n bÃ¡o lá»—i khÃ´ng tÃ¬m tháº¥y module Ä‘Æ°á»£c export.

## Bài 1.1 — Component render lần đầu

**1. Tại sao component chỉ render 1 lần?**
- Vì component LifecycleDemo chỉ là một function trả về giao diện tĩnh. Khi React gọi function này lần đầu, nó tạo ra giao diện và gắn lên màn hình (Mount). Do component không nhận dữ liệu từ bên ngoài (props) và cũng không có bộ nhớ trạng thái riêng (state), React không có lý do gì để gọi lại function này nữa.

**2. Khi nào nó sẽ render lại?**
- Nó sẽ render lại khi state nội bộ của nó thay đổi (ví dụ thông qua hàm setState) hoặc khi props (dữ liệu được truyền từ cha xuống) thay đổi.