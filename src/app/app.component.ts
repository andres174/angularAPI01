import { Component } from '@angular/core';
import { PeliculasService } from "./servicios/peliculas.service";
import { MusicaService } from "./servicios/musica.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAPI01';
  movies:any;
  music:any;
  constructor(private peliculas:PeliculasService, private musica:MusicaService){}
  
  


  ngOnInit(): void {
    //this.getMoviesName();
  }
  getMoviesName(name:any){
    this.peliculas.getMoviesName(name.value).subscribe({
      next:(s)=>{
        this.movies = s.results;
        debugger
      },
      error: (e)=>{
        debugger
      }
    })
    
    
  }

  getMusic(name:any){
    this.musica.getMusic(name.value).subscribe({
      next:(s)=>{
        this.music = s.data;
        console.log(s)
      },
      error: (e)=>{
        debugger
      }
    })
    
    
  }

}
