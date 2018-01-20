import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService {

  base = "";
  stage = "";

  constructor(private _http: Http) {}

  getMessage() {
    return this.makeRequest('/inigo/hello');
  }

  private makeRequest(path: string){
    let url = `${ this.base }${ this.stage }${ path }`;
    return this._http.get(url)
      .map((res) => res.json());
  }

}
