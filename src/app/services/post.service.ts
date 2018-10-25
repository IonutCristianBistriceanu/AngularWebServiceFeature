import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

/* Since the DataService class is generic, it is decoupled from the application and is used by other services
that extend the class giving them access to its methods
In this case PostService class is using it with a call to the base constructor and a specific API URL
*/ 
export class PostService extends DataService{
  constructor(http: Http) { 
    super('http://jsonplaceholder.typicode.com/posts',http);
  }
}