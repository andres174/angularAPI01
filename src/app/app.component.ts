import { Component } from '@angular/core';
import { PeliculasService } from "./servicios/peliculas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAPI01';
  movies:any;
  constructor(private peliculas:PeliculasService){}


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

}
