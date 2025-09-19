package web.blogger.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import web.blogger.model.Post;
import web.blogger.service.PostService;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:4200")
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

    // Chỉ Admin mới được xoá bài
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public String deletePost(@PathVariable Long id) {
        postService.deletePost(id);
        return "Deleted post id: " + id;
    }
}
