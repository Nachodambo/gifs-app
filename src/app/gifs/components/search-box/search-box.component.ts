import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsSerice: GifsService) {}

  searchTag(): void {
    let newTag = this.tagInput.nativeElement.value;

    this.gifsSerice.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
