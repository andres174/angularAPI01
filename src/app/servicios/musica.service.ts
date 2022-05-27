import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private http:HttpClient) { }

  getMusic(name:string){
    return this.http.get<any>('https://api.deezer.com/search?q='+ name)
  }
}