package web.blogger.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.blogger.model.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}



