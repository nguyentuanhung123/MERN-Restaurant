### Các thứ cần tải: 
- B1: npm i express cors mongoose 
- B2: npm i nodemon

### Khi ta chuyển sữ liệu của một ảnh khoảng 1mb đến 2mb sẽ bị lỗi: Cách fix:
```jsx
app.use(express.json({
    limit: "10mb"
}))
```

### Tải stripe cho backend
- npm i stripe

### Thêm phí vận chuyển vào link

- https://dashboard.stripe.com/test/shipping-rates

### Bổ sung STRIPE cho các biến môi trường trong file .env


### Gặp lỗi

- Invalid URL: URL must be 2048 characters or less.

- Uncaught (in promise) IntegrationError: stripe.redirectToCheckout: Invalid value for sessionId. You specified 'Invalid URL: URL must be 2048 characters or less.'.

-> Xóa images ở paymentStripe (do tràn ngăn xếp)

### Deploy backend

- B1: Push tất cả code lên git
- B2: Vào link: https://render.com
- B3: Đăng nhập bằng tài khoản github
- B4: Vào link: https://dashboard.render.com
- B5: Nhấn +New -> Chọn Web Services
- B6: Vào Public Git Repository -> Paste https://github.com/nguyentuanhung123/MERN-Restaurant
- B7: Ở Root Directory -> Điền backend
- B8: Ở Build Command -> Điền thêm npm install bên cạnh chữ backend được hiện
- B9: Ở Start Command -> Điền thêm npm run dev bên cạnh chữ backend được hiện
- B10: Chọn Free
- B11: Bổ sung các biến trong Environment Variables (Trong file .env)

### Trong file .env

- MONGODB_URL = ""
- STRIPE_SECRET_KEY = ""
- FRONTEND_URL = "http://localhost:5173"

### Khi deploy lên render thay FRONTEND_URL bằng link ở Vercel