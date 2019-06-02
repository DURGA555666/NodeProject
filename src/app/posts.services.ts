import { Post } from './posts.model';
export class PostsServices{
  posts:Post[]=[];
  getPosts(){
    return this.posts;

  }
  setPosts(post: Post){
      this.posts.push(post);
  }
}
