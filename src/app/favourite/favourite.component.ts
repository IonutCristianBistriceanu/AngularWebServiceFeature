import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})

export class FavouriteComponent {
  @Input('is-liked') isLiked :boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    this.click.emit({newValue: this.isLiked});
  }
}

export interface FavouriteLikedEventArgs {
  newValue:boolean;
}