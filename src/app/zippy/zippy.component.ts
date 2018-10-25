import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent{
  constructor() { }
  @Input('title') title : string;
  isExpanded:boolean;
 
  toggle(){
    this.isExpanded=!this.isExpanded;
  }
}
