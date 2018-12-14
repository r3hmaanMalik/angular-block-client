import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from './post.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  public post : Post;
  @ViewChild('title') inputfield: ElementRef;

   constructor(private postService: PostService, private commonService: CommonService) {
       this.post = new Post();
   }

   addPost() {
     if(this.post.title && this.post.content){
         this.postService.sendPost(this.post).subscribe(res =>{
             console.log('response is ', res)
             this.inputfield.nativeElement.value = "";
             this.commonService.notifyPostAddition();
         });

     } else {
         alert('Title required');
     }
   }
}
