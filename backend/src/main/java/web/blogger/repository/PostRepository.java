package web.blogger.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.blogger.model.Post;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByOrderByCreatedAtDesc();
}
