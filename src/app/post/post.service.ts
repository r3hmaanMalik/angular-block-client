import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient){

  }

  sendPost(post: Post){
      return this.http.post('http://localhost:3000/blogs',{
        title : post.title,
        content : post.content
      })
  }
}
