### Các thứ cần tải: 
- B1: npm i express cors mongoose 
- B2: npm i nodemon

### Khi ta chuyển sữ liệu của một ảnh khoảng 1mb đến 2mb sẽ bị lỗi: Cách fix:
```jsx
app.use(express.json({
    limit: "10mb"
}))
```