import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BlogsService {

    constructor(private http: HttpClient){

    }

    getAllPost(){
        return this.http.get('http://localhost:3000/blogs',{})
    }

}
