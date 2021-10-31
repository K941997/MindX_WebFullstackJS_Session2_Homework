* 1. Cách chạy NodeJS:
+ Trỏ thư mục: chuột phải chọn "Open in terminal", hoặc Terminal: gõ cd ./2_Session2/app
+ Bật Terminal: gõ node app.js để chạy kết quả
+ Terminal: gõ "npm init -y" để khai báo "file package.json" mô tả app
+ Terminal: gõ "npm i is-odd" để tải "thư viện module" bên thứ ba ví dụ: is-odd, sum, ...
+ Terminal: khi có "file package.json", gõ "npm i" để tạo "file node_modules" và tải các module vào

* 2. Cách dùng NodeJS:
+ khởi tạo: 
    const fs = require('fs');

+ các chức năng:
    fs.writeFile, fs.watch, fs.stat, fs.promises, ... - Đọc Doc yêu cầu thành phần ntn

+ B1: fs.writeFile - để tạo file lưu dữ liệu
+ B2: CRUD - thêm đọc sửa xóa dữ liệu

+ export 1 module:
    module.exports = addUser; 

+ sử dụng module:
    const addUser = require('./add_user'); //module add_user

