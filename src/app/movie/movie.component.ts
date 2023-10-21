import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {

  movieTitle: any = '';
  mdata: any = null;


  constructor(private http: HttpClient) { }
  async search() {
    if (this.movieTitle) {
      try {
        const apiKey = 'e57c2b8c';
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(this.movieTitle)}&apikey=${apiKey}`;
        const data = await this.http.get(url).toPromise();
        this.mdata = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }
  }
}
