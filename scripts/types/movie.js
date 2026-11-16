export class Movie
{
    constructor(title, director, year, rating)
    {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
    }

    Render(parent)
    {
        const isHighlyRated = Number(this.rating) >= 8;
        const card = document.createElement('article');
        card.className = isHighlyRated
            ? 'movie-card movie-card--high-rating'
            : 'movie-card';

        const title = document.createElement('h2');
        title.textContent = this.title;

        const director = document.createElement('p');
        director.textContent = `Director: ${this.director}`;

        const year = document.createElement('p');
        year.textContent = `Año: ${this.year}`;

        const rating = document.createElement('p');
        rating.textContent = `Puntuación: ${this.rating}/10`;

        card.append(title, director, year, rating);

        if (isHighlyRated)
        {
            const badge = document.createElement('span');
            badge.className = 'movie-card__badge';
            badge.textContent = '★ Muy bien valorada';
            card.appendChild(badge);
        }

        parent.appendChild(card);
    }
}