# Sử dụng image JDK 21 nhẹ từ eclipse-temurin (Alpine)
FROM eclipse-temurin:21-jdk-alpine

# Đặt thư mục làm việc trong container là /app
WORKDIR /app

# Copy file jar đã build từ thư mục target vào container, đặt tên là app.jar
COPY target/blogger-0.0.1-SNAPSHOT.jar app.jar

# Mở cổng 8080 cho ứng dụng
EXPOSE 8080

# Lệnh để chạy ứng dụng Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]
