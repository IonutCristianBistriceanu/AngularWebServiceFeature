import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent {
  categoryOptions=[
    {
      id:1,name:"Development"
    },
    {
      id:2,name:"Art",
    },
    {
      id:3,name:"Languages"
    }
  ]
  constructor() { }

  submit(form){
    console.log(form);
  }
}
