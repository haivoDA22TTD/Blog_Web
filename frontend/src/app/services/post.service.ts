import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

 createPost(post: any, token: string) {
  const headers = { Authorization: `Bearer ${token}` };
  return this.http.post<any>(`${this.apiUrl}`, post, { headers });
}


  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/view`);
  }
  deletePost(id: number, token: string) {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
  return this.http.delete(`${this.apiUrl}/${id}`, { headers });
}

}
