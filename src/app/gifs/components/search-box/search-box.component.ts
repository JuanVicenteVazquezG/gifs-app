import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent  {
  constructor(public gifsService: GifsService) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag( ): void{
    const newTag = this.tagInput.nativeElement;
    this.gifsService.searchTag(newTag.value)
    this.tagInput.nativeElement.value = '';
  }

}
