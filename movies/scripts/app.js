import { Movie } from './types/movie.js';

class Main
{
    constructor()
    {
        this.movieHolder = document.getElementById('movie-holder');

        this.movies = [];
    }

    async Initialize(){
        const moviesFile = await fetch('./data/movies.json');
        const moviesData = await moviesFile.json();

        moviesData.forEach((movieData) => {
            const movie = new Movie(
                movieData.title,
                movieData.director,
                movieData.year,
                movieData.rating
            );
            this.movies.push(movie);
        });
        this.movies.forEach((movie)=>
        {
            movie.Render(this.movieHolder);
        });
    }
}

const app = new Main();
app.Initialize();