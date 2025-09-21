# 🌐 Blog Web Application

> Dự án blog cá nhân sử dụng Angular (frontend), Spring Boot (backend), MySQL (database) và Docker để triển khai.

---

## 🛠️ Công nghệ sử dụng

- <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="20" alt="Angular" /> Angular  
- <img src="https://spring.io/images/icon-spring-boot.svg" width="20" alt="Spring Boot" /> Spring Boot  
- <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" width="20" alt="MySQL" /> MySQL  
- <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="20" alt="Docker" /> Docker


## 📦 Cấu trúc dự án
```bash
blog-web/
├── backend/ # Spring Boot project
├── frontend/ # Angular project
├── docker-compose.yml # Docker Compose file
└── README.md
```
## 🧩 Chức năng chính

### 👤 Người dùng
- Đăng ký / Đăng nhập
- Đọc bài viết
- Tìm kiếm bài viết
- Bình luận bài viết

### ✍️ Tác giả (Author)
- Tạo / cập nhật / xóa bài viết của mình
- Quản lý bình luận dưới bài viết của mình

### 🛡️ Admin
- Quản lý tất cả người dùng
- Quản lý bài viết và bình luận

---

---

## 🚀 Build & Chạy ứng dụng bằng Docker

### ⚙️ Yêu cầu

- Docker
- Docker Compose
- Java 17+ (chỉ nếu build thủ công backend)
- Node.js + Angular CLI (chỉ nếu build thủ công frontend)

---

## <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="20" alt="Angular" /> Build Frontend (Angular)

Vào thư mục `frontend`:

```bash
cd frontend
npm install
ng build --configuration production
```

### <img src="https://spring.io/images/icon-spring-boot.svg" width="20" alt="Spring Boot" /> Build Backend (Spring Boot)
```bash
  mvn clean package -DskipTests
```
### <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="20" alt="Docker" /> Lệnh build & chạy bằng Docker

```bash
  docker-compose up --build
```

