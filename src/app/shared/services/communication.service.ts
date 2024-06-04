import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  headerShow:boolean = true;
  constructor() { }

  hide_showHeader(value:boolean){
    this.headerShow = value;
  }
  getHeaderValue(){
    return this.headerShow;
  }
}
