# 📝 Ứng Dụng Todo List - React

[![Deploy to Vercel](https://github.com/TranCongQuy/TH5_LapTrinhWEBvsAI/actions/workflows/deploy.yml/badge.svg)](https://github.com/TranCongQuy/TH5_LapTrinhWEBvsAI/actions/workflows/deploy.yml)

🔗 **Live Demo**: https://th5-lap-trinh-we-bvs-ai.vercel.app

## 📖 Mô Tả

Ứng dụng Todo List xây dựng bằng React 18, áp dụng:
- React Hooks (useState, useEffect)
- PropTypes validation
- LocalStorage lưu trữ dữ liệu
- ARIA attributes cho accessibility
- Responsive design (320px → 1920px)
- Dark mode tự động
- Deploy tự động lên Vercel qua GitHub Actions

## ✨ Tính Năng

- ✅ Thêm / Xóa / Đánh dấu hoàn thành công việc
- ✅ 3 bộ lọc: Tất Cả, Chưa Hoàn Thành, Đã Hoàn Thành
- ✅ Tìm kiếm không phân biệt hoa/thường
- ✅ Thống kê động (tổng / chưa hoàn / đã hoàn)
- ✅ Lưu vào localStorage - persist khi F5
- ✅ Nút "Xóa Tất Cả" có xác nhận
- ✅ Validation input (không cho trống)
- ✅ Keyboard navigation đầy đủ
- ✅ ARIA labels, aria-invalid, role="alert"
- ✅ Responsive mobile/tablet/desktop
- ✅ Dark mode tự động theo hệ thống
- ✅ Giao diện Modern SaaS (glassmorphism + gradient)

## 🛠️ Cài Đặt Local

```bash
git clone https://github.com/TranCongQuy/TH5_LapTrinhWEBvsAI.git
cd TH5_LapTrinhWEBvsAI
npm install
npm start
Mở http://localhost:3000

📁 Cấu Trúc
text
TH5_LapTrinhWEBvsAI/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deploy Vercel
├── public/
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Stats.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── index.js
├── BAO_CAO_PHAN_ANH.md         # Báo cáo 500-800 từ
├── CHECKLIST.md                # Checklist tiêu chí
├── package.json
└── README.md
🔄 4 Lần Lặp Lại
Lần 1 - Scaffolding
Tạo TodoList, TodoItem với dữ liệu tĩnh

Checkbox, nút delete, PropTypes

Lần 2 - Interactivity
Thêm input + nút "Thêm"

Bộ lọc 3 trạng thái, tìm kiếm

Thống kê động, validation

Lần 3 - Styling
CSS Modern SaaS, BEM naming

Focus, hover effects

Responsive, dark mode

Lần 4 - Polish & LocalStorage
Lưu/tải localStorage

ARIA đầy đủ, error handling

Xóa tất cả có xác nhận

Deploy Vercel qua GitHub Actions

🎨 Công Nghệ
React 18 + Hooks

PropTypes

LocalStorage API

CSS3 (Flexbox, Grid, Media Queries, backdrop-filter)

GitHub Actions + Vercel

🚀 Deploy
Project tự động deploy lên Vercel mỗi khi push lên nhánh main.

👤 Tác Giả
Họ tên: Trần Công Quý

Trường: Đại học Phú Xuân