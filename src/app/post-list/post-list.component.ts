import { PostsServices } from './../posts.services';
import { Post } from './../posts.model';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

   List: Post[] = [];
   constructor(public postsServices: PostsServices) {

   }
   ngOnInit(): void {
    this.List = this.postsServices.getPosts();

  }

}
