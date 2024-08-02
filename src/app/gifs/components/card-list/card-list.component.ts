import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/SearchResponse.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  constructor() {}

  @Input()
  public gifs: Gif[] = [];
}
