import { PostsServices } from './../posts.services';
import { Post } from './../posts.model';
import { Component } from '@angular/core';

import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

      constructor(public postsServices: PostsServices){}

      getcontent(post: NgForm) {
        const PostList:Post = {title: post.value.TITTLE,
           content: post.value.CONTENT };
          this.postsServices.setPosts(PostList);
          }

}
