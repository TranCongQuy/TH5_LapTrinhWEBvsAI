# Báo Cáo Phản Ánh - Todo List React

## 1. Quá Trình 4 Lần Lặp Lại

**Lần 1 - Scaffolding**: Bắt đầu với mảng tĩnh 3 công việc, render qua `TodoList` và `TodoItem`. AI giúp tạo cấu trúc component và PropTypes nhanh. Khó khăn đầu tiên là hiểu tại sao phải dùng `id` thay vì `index` làm `key` trong React.

**Lần 2 - Interactivity**: Thêm `useState` cho input, filter, search. AI gợi ý dùng `.filter()` kết hợp 2 điều kiện. Tôi phát hiện logic phải **lọc theo status trước, search sau** thì kết quả mới đúng. Đây là bài học quan trọng về thứ tự xử lý.

**Lần 3 - Styling**: AI tạo CSS với BEM naming nhưng tôi phải tinh chỉnh. Focus style với `box-shadow` được thêm để hỗ trợ keyboard user — chi tiết nhỏ nhưng quan trọng cho accessibility.

**Lần 4 - Polish**: Bước quan trọng nhất. Thêm localStorage với **2 useEffect riêng** (load on mount, save on change). ARIA labels bổ sung cho checkbox và nút xóa. Xử lý lỗi với try-catch cho JSON.parse.

## 2. Những Gì Học Được Từ AI

- Cách tách component hợp lý
- Pattern `setTodos(todos.map(...))` để update immutable
- `aria-describedby` liên kết input với error message
- `role="alert"` để screen reader đọc lỗi
- Dùng `Date.now()` làm ID duy nhất thay vì index

## 3. Hạn Chế Của AI

- CSS đôi khi quá phức tạp, không cần thiết
- Không kiểm tra được trải nghiệm thực tế trên mobile
- Có thể đề xuất over-engineering
- Đôi khi quên ARIA nếu không nhắc rõ

## 4. Cách Phát Hiện & Khắc Phục Accessibility Issues

- Dùng WAVE extension phát hiện thiếu label
- Dùng axe DevTools phát hiện contrast thấp
- Test bằng Tab key để kiểm tra focus order
- Thêm `aria-label` cho nút icon (✕) vì chỉ có ký tự
- Đảm bảo contrast ratio >= 4.5:1 (WebAIM Contrast Checker)

## 5. Khó Khăn Responsive Design

- Container 600px bị tràn trên mobile 320px
- Giải pháp: `max-width: 100%` + media queries 480px và 768px
- Touch targets >= 44x44px, tăng padding nút nhỏ
- Font size dùng `rem` để dễ scale

## 6. Cải Thiện Muốn Làm Thêm

- Dark mode toggle thủ công (không chỉ auto)
- Drag & drop để sắp xếp
- Due date + Priority level
- Export/Import JSON
- Categories / Tags

## 7. Bài Học Về Quy Trình 4 Lần Lặp

Lần lặp đầu tiên giúp tôi hiểu rằng **đừng cố làm mọi thứ trong 1 lần**. Lần 2 dạy rằng **state nên nâng lên cha khi nhiều component chia sẻ**. Lần 3 cho thấy **BEM naming** giúp CSS dễ bảo trì. Lần 4 là bài học về **accessibility không thể làm sau cùng**.

## 8. Đánh Giá Chung

AI hỗ trợ rất tốt trong việc tạo boilerplate và gợi ý best practices. Tuy nhiên, sinh viên cần **hiểu code** chứ không copy mù. Quá trình 4 lần lặp lại giúp tôi thấy rõ tầm quan trọng của việc test sau mỗi bước — nếu gộp tất cả vào 1 lần, rất khó debug khi có lỗi. Tôi học được nhiều về React Hooks, accessibility, và cách tư duy component.
