import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class GifServic {

  private _tagsHistory: string[] = [];
  private  GIPHY_API_KEY  = environment.GIPHY_API_KEY;

  get tagHistory(){
    return [...this._tagsHistory];
  }

  set tagHistory(tagsH: string[]){
    this._tagsHistory = [...tagsH];
  }

  public searchTag( tag: string ):void{
    if ( tag.length === 0) return
    this.organizeHistory( tag );
    this._tagsHistory.unshift( tag );
    this._tagsHistory.splice(10)
  }

  private organizeHistory( tag: string ){
    tag = tag.toLowerCase();
    this.tagHistory = [...this.tagHistory.filter(( tagName )=> tagName.toLowerCase() != tag)]
  }

  constructor() { }


}
