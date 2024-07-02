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