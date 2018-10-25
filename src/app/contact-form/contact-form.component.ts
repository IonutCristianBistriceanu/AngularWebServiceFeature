import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMethods=[
    {
      id:1,name:"Email"
    },
    {
      id:2,name:"Phone"
    }
  ];
  constructor() { }

  submit(f) {
    console.log(f);
  }
}