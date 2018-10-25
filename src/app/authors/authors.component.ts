import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors;

  constructor(private service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }
}
