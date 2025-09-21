# 🌐 Blog Web Application

> Dự án blog cá nhân sử dụng Angular (frontend), Spring Boot (backend), MySQL (database) và Docker để triển khai.

---

## 🛠️ Công nghệ sử dụng

- <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="40" alt="Angular" /> Angular  
- <img src="https://raw.githubusercontent.com/haivoDA22TTD/haivoDA22TTD/main/assets/Spring%20Boot.png" width="40") Spring Boot
- <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" width="40" alt="MySQL" /> MySQL  
- <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="40" alt="Docker" /> Docker


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


### 🛡️ Admin
- Tạo / xóa bài viết của mình

---


## 🚀 Build & Chạy ứng dụng bằng Docker

### ⚙️ Yêu cầu

- Docker
- Docker Compose
- Java 21+ (chỉ nếu build thủ công backend)
- Node.js + Angular CLI (chỉ nếu build thủ công frontend)

---

### <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="40" alt="Angular" /> Build Frontend (Angular)

Vào thư mục `frontend`:

```bash
cd frontend
npm install
ng build --configuration production
```

### ![Spring Boot](https://raw.githubusercontent.com/haivoDA22TTD/haivoDA22TTD/main/assets/Spring%20Boot.png width="40") Build Backend (Spring Boot)

```bash
  cd backend
  mvn clean package -DskipTests
```
### <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="40" alt="Docker" /> Lệnh build & chạy bằng Docker

```bash
  docker-compose up --build
```

