package web.blogger.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import web.blogger.model.Post;
import web.blogger.service.PostService;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost")
public class PostController {

    @Autowired
    private PostService postService;

    // User và Admin đều có thể xem
    @GetMapping("/view")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    // Chỉ Admin mới được đăng bài
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

    // Chỉ Admin mới được xóa bài
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}
