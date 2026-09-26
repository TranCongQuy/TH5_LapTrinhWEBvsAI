# ✅ Checklist - Dự Án Todo List

## Yêu Cầu Chức Năng

### Chức Năng Cơ Bản

- [x] Hiển thị danh sách công việc từ state
- [x] Thêm công việc mới từ input
- [x] Xóa công việc từ danh sách
- [x] Checkbox để đánh dấu hoàn thành
- [x] Công việc hoàn thành hiển thị kiểu gạch ngang
- [x] Hiển thị thông báo trống khi không có công việc
- [x] Mỗi công việc có ID duy nhất

### Bộ Lọc & Tìm Kiếm

- [x] 3 nút lọc: Tất Cả, Chưa Hoàn Thành, Đã Hoàn Thành
- [x] Nút lọc hiện tại được highlight
- [x] Thanh tìm kiếm lọc công việc theo từ khóa
- [x] Tìm kiếm không phân biệt chữ hoa/thường
- [x] Bộ lọc và tìm kiếm kết hợp hoạt động đúng
- [x] Hiển thị "Không tìm thấy" khi tìm kiếm không có kết quả

### Thống Kê & Trạng Thái

- [x] Hiển thị tổng số công việc
- [x] Hiển thị số công việc đã hoàn thành
- [x] Hiển thị số công việc chưa hoàn thành
- [x] Thống kê cập nhật động

### LocalStorage

- [x] Lưu dữ liệu vào localStorage khi thêm/xóa/cập nhật
- [x] Tải dữ liệu từ localStorage khi component mount
- [x] Nút "Xóa Tất Cả" với xác nhận
- [x] Dữ liệu persist khi refresh trang

---

## Yêu Cầu Kỹ Thuật

### React & JavaScript

- [x] Sử dụng functional components với hooks
- [x] useState cho state management
- [x] useEffect cho side effects (localStorage)
- [x] PropTypes validation cho tất cả components
- [x] Mã clean, dễ đọc
- [x] Không có console errors

### Component Structure

- [x] App.jsx component chính
- [x] TodoList.jsx component
- [x] TodoItem.jsx component
- [x] FilterBar.jsx component
- [x] Stats.jsx component
- [x] SearchBar.jsx component
- [x] Các components được tách hợp lý

### Props & State

- [x] Props được truyền đúng
- [x] State được nâng lên component cha phù hợp
- [x] Không prop drilling quá mức
- [x] Callback functions hoạt động chính xác

---

## Yêu Cầu Giao Diện & CSS

### Thiết Kế

- [x] Giao diện trông chuyên nghiệp
- [x] Màu sắc nhất quán
- [x] Typography rõ ràng (font size, weight)
- [x] Spacing nhất quán
- [x] Không có lỗi hiển thị

### Focus & Hover States

- [x] Tất cả button có focus style rõ ràng
- [x] Input có focus style (border + box-shadow)
- [x] Hover effects mượt mà
- [x] Transition smooth (0.2s)

### Responsive Design

- [x] Kiểm tra trên mobile (320px)
- [x] Kiểm tra trên tablet (768px)
- [x] Kiểm tra trên desktop (1920px)
- [x] Không có horizontal scroll không mong muốn
- [x] Touch targets ≥ 44x44px
- [x] Font readable trên tất cả devices
- [x] Layout tự điều chỉnh hợp lý

### Dark Mode (Optional)

- [x] Dark mode toggle (nếu implement)
- [x] Kiểu dáng hợp lý ở dark mode
- [x] Tương phản màu đủ ở dark mode

---

## Yêu Cầu Khả Năng Truy Cập (Accessibility)

### Labels & Input

- [x] Tất cả input có `<label>` rõ ràng
- [x] Label liên kết đúng với input (`htmlFor` & `id`)
- [x] Placeholder không thay thế cho label
- [x] Input có tên hữu ích cho screen reader

### ARIA Attributes

- [x] Input có `aria-invalid` khi có lỗi
- [x] Input có `aria-describedby` liên kết error message
- [x] Button có `aria-label` hữu ích
- [x] Checkbox có `aria-label` hoặc `aria-describedby`
- [x] Error messages có `role="alert"`
- [x] Todo list có `role="list"` và `aria-label`

### Keyboard Navigation

- [x] Tab di chuyển qua tất cả phần tử tương tác
- [x] Shift+Tab di chuyển ngược lại
- [x] Enter kích hoạt button/submit
- [x] Space bật/tắt checkbox
- [x] Escape đóng dialog (nếu có)
- [x] Thứ tự Tab hợp lý

### Visual Accessibility

- [x] Focus indicator rõ ràng
- [x] Độ tương phản ≥ 4.5:1 cho văn bản bình thường
- [x] Không dựa solely vào màu sắc để truyền tải thông tin
- [x] Icon/symbol có giải thích

### Screen Reader Support

- [x] Semantic HTML: `<button>`, `<label>`, `<form>`, `<ul>`, `<li>`
- [x] Không dùng `<div>` thay thế cho `<button>`
- [x] Heading hierarchy đúng
- [x] List markup đúng (`<ul>`, `<ol>`, `<li>`)
- [x] Error messages đọc được cho screen reader

---

## Validation & Error Handling

### Input Validation

- [x] Input trống được reject
- [x] Thông báo lỗi hiển thị khi validation fail
- [x] Thông báo lỗi được xóa khi input hợp lệ
- [x] Enter/Space không gửi form nếu invalid

### Edge Cases

- [x] Thêm công việc khi danh sách trống
- [x] Xóa công việc cuối cùng
- [x] Tìm kiếm với danh sách trống
- [x] Lọc với kết quả trống
- [x] localStorage đầy (try-catch)
- [x] JSON.parse lỗi (try-catch)

---

## Testing & Debugging

### Manual Testing

- [x] Test trên tất cả tính năng
- [x] Test bằng bàn phím
- [x] Test refresh trang
- [x] Test localStorage clear browser data
- [x] Test trên multiple browsers

### Accessibility Testing

- [x] Chạy qua WAVE
- [x] Chạy qua axe DevTools
- [x] Test với screen reader
- [x] WebAIM Contrast Checker for colors
- [x] Test zoom to 200%

### Performance Testing

- [x] Chạy Lighthouse
- [x] Kiểm tra Performance score
- [x] Kiểm tra Accessibility score ≥ 90
- [x] Không có unused code/imports

---

## Documentation & Submission

### Code Comments

- [x] Comment cho các hàm phức tạp
- [x] Comment cho component imports
- [x] Giải thích logic không obvious

### README.md

- [x] Mô tả dự án
- [x] Hướng dẫn cài đặt
- [x] Danh sách tính năng
- [x] Cấu trúc dự án
- [x] Công nghệ sử dụng
- [x] Hướng dẫn sử dụng

### Báo Cáo Phản Ánh (500-800 từ)

- [x] Quá trình qua 4 lần lặp lại
- [x] Những gì học được từ AI
- [x] Hạn chế AI gặp phải
- [x] Cách phát hiện/khắc phục accessibility issues
- [x] Khó khăn responsive design
- [x] Đánh giá chung

### File Submission

- [x] Tất cả source files (.jsx, .css)
- [x] package.json
- [x] README.md
- [x] Báo cáo phản ánh
- [x] Checklist này (đánh dấu completed)
- [x] Organized in folder/zip
- [x] Tên file đúng format: LastName_FirstName_TodoApp.zip

---

## Lần Lặp 1: Xây Dựng Giàn Giáo

**Status:** [x] Hoàn thành

- [x] Component TodoList render đúng
- [x] Checkbox hoạt động
- [x] Nút Delete hoạt động
- [x] PropTypes định nghĩa
- [x] CSS cơ bản

---

## Lần Lặp 2: Thêm Tương Tác

**Status:** [x] Hoàn thành

- [x] Thêm công việc mới hoạt động
- [x] 3 nút lọc hoạt động
- [x] Thanh tìm kiếm hoạt động
- [x] Bộ lọc + tìm kiếm kết hợp đúng
- [x] Thống kê hiển thị chính xác
- [x] Trạng thái trống hiển thị
- [x] Input validation hoạt động

---

## Lần Lặp 3: Kiểu Dáng

**Status:** [x] Hoàn thành

- [x] Giao diện đẹp mắt
- [x] Focus styles rõ ràng
- [x] Hover effects mượt
- [x] Responsive mobile (320px)
- [x] Responsive tablet (768px)
- [x] Responsive desktop (1920px)
- [x] Không horizontal scroll
- [x] CSS organized/clean

---

## Lần Lặp 4: Đánh Bóng & LocalStorage

**Status:** [x] Hoàn thành

- [x] LocalStorage save hoạt động
- [x] LocalStorage load hoạt động
- [x] Tất cả input có label
- [x] ARIA attributes đầy đủ
- [x] Keyboard navigation hoạt động
- [x] Error handling đúng
- [x] Xóa tất cả có xác nhận
- [x] Không có console errors

---

## Điểm Số Tự Đánh Giá

| Tiêu Chí                | Điểm       | Ghi Chú               |
| ----------------------- | ---------- | --------------------- |
| Chức Năng (40%)         | 38/40      | Đầy đủ chức năng      |
| Mã Code (30%)           | 28/30      | Component tách hợp lý |
| Giao Diện (20%)         | 19/20      | Đẹp, responsive       |
| Khả Năng Truy Cập (10%) | 9/10       | ARIA đầy đủ           |
| **TỔNG**                | **94/100** |                       |

---

## Người Dùng Cuối Test (Friends/Family)

**Tester 1:** [Lê Văn Bảo Hùng]

- [x] Có thể thêm công việc?
- [x] Có thể hoàn thành công việc?
- [x] Có thể xóa công việc?
- [x] Bộ lọc hoạt động?
- [x] Tìm kiếm hoạt động?
- [x] Giao diện dễ sử dụng?
- Ghi chú: Giao diện đẹp, dễ dùng, thao tác mượt.

**Tester 2:** [Trần Công Quý]

- [x] Có thể thêm công việc?
- [x] Có thể hoàn thành công việc?
- [x] Có thể xóa công việc?
- [x] Bộ lọc hoạt động?
- [x] Tìm kiếm hoạt động?
- [x] Giao diện dễ sử dụng?
- Ghi chú: Ứng dụng trực quan, màu sắc hài hòa.

---

**Ngày hoàn thành:** 26/09/2026
**Tên sinh viên:** [Trần Công Quý]
**Lớp:** [CNTT - K22]
