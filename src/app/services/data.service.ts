import { AppError } from './../common/app-error';
import { Observable, Subject, throwError } from 'rxjs';
import { Http } from '@angular/http';
import { InputFormatDirective } from './../input-format.directive';
import { Injectable } from '@angular/core';
import { NotFoundError } from '../common/no-found-error';
import { BadRequest } from '../common/bad-request';
import { map, catchError } from 'rxjs/operators';


/*
One functionality is that angular provides an object oriented approach to coding and the MVC architecture
making maintainance of software easier. Also improved component or service reusability.
in this file we have created a decoupled data service that other components can consume regardless of that api endpoint
they call.

Generic methods for basic CRUD operations are created and also an error handler message that checks error types and
returns user friendly messages based on the error.
*/

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  // Create something in the database
  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(map(response => response.json()))
      .pipe(catchError(this.handleError));
  }

  // Retrieve all from the database
  getAll() {
    return this.http.get(this.url)
      .pipe(map(response => response.json()))
      .pipe(catchError(this.handleError));
  }

  // Update a resource in the database
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map(response => response.json()))
      .pipe(catchError(this.handleError));
  }

  // Delete someting in the database
  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(map(response => response.json()))
      .pipe(catchError(this.handleError)).toPromise();
  }

  // Error handler method
  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequest(error.json()));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }
}
