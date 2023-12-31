import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  Year: number = 0;
  movies: Movie[] = [];
  errorMessage = "No results found";

  constructor(private movieService: MovieService) { }

  searchMovie() {
    if (this.Year >= 0) {
      this.movieService.getMovies(this.Year).subscribe((data) => {
        this.movies = data.data;
      })
    } else {
      this.errorMessage;
    }
  }
}
