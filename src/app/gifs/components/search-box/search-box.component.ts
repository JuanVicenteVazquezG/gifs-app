import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent  {
  constructor(public gifService: GifService) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag( ): void{
    const newTag = this.tagInput.nativeElement;
    this.gifService.searchTag(newTag.value)
    this.tagInput.nativeElement.value = '';
  }

}
