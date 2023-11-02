import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = [];
  private  GIPHY_API_KEY  = environment.GIPHY_API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'
  private limit: number = 10

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

    const url = `${this.serviceUrl}/search`;
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', this.limit.toString())
      .set('q', tag)
    this.http.get<SearchResponse>( url, { params } )
    .subscribe( resp => {

      this.gifList = resp.data
      console.log(this.gifList)
    })
  }

  private organizeHistory( tag: string ){
    tag = tag.toLowerCase();
    this.tagHistory = [...this.tagHistory.filter(( tagName )=> tagName.toLowerCase() != tag)]
  }

  constructor( private http: HttpClient) { }


}
