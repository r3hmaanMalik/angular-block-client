import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { Post } from '../models/post.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [ BlogsService ]
})
export class BlogsComponent implements OnInit {
  public posts : any;

  constructor(private blogsService: BlogsService, private commonService: CommonService) { }

  ngOnInit() {
     this.getAllPost();
     this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }


  getAllPost(){
      this.blogsService.getAllPost().subscribe(result => {
          this.posts = result;
          console.log(result);
      });
    }
}
