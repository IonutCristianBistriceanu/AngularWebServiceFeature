import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.scss']
})
export class TitleCaseComponent implements OnInit {
  data:string;
  constructor() { }

  ngOnInit() {
  }

}
