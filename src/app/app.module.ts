import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { RootComponent } from './root/root.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PostComponent } from './post/post.component';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    RootComponent,
    BlogsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
