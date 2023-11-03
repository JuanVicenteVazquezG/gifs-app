import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class  CardComponent implements OnInit {
  constructor( ){}

  @Input()
  public gif!: Gif

  ngOnInit(): void {
    if(!this.gif) throw new Error ('Property gif is required');
  }

}
