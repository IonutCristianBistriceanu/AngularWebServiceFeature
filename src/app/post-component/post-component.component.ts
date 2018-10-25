import { BadRequest } from './../common/bad-request';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/no-found-error';
import { throwError } from 'rxjs';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  posts: any[];

  /*
  The post component uses the PostService and makes use of the methods inside
  the class that the PostService is extending
  */

  constructor(private service: PostService) {
  }

  /*
    CRUD methods are created inside the component and call upon the service to to its respective job with 
    what implementation is needed based on the requirement or data model.
   */

  createPost(input: HTMLInputElement) {

    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
      }, (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadRequest) {
          console.log("Bad request");
        }
        else throw error;
      })
  }

  updatePost(post) {
    this.service.update(post).subscribe(
      updatedPost => {
        console.log(updatedPost);
      })
  }

  //(click)="deletePost(post)" is called and the post is deleted with the call from the created API
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id);
  }

  ngOnInit() {
    this.service.getAll().subscribe(posts => this.posts = posts)
  }
}
