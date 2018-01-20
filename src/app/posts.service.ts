import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {

  base = "http://api.giphy.com/v1/gifs/";

  constructor(private _http: Http) {}

  getPosts(query: string) {
    let endpoint = `search?q=${ query }+reactions&randomize=1&rating=g&api_key=dc6zaTOxFJmzC&limit=20`;
    return this.makeRequest(endpoint);
  }

  private makeRequest(path: string){
    let url = `${ this.base }${ path }`;
    return this._http.get(url)
      .map((res) => res.json().data.sort(() => Math.random() * 2 - 1));
  }

}
