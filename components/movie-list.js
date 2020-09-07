import React, { Component } from 'react';

class MovieList extends Component {

    shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text;
    }

    renderMovies(movies) {
        return movies.map(movie =>
            (
                <div key={movie.id}  className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top"
                            src={movie.image} alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <h5>${movie.price}</h5>
                            <p className="card-text">{this.shorten(movie.description, 100)}</p>
                            <small> Release Year - {movie.releaseYear}</small>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                            <br />
                            <small className="text-muted">Genre: {movie.genre}</small>
                        </div>
                        <h2>{this.props.count}</h2>
                    </div>
                </div>
            )
        )
    }

    render() {
        const { movies } = this.props;
        return (
            <React.Fragment>
                { this.renderMovies(movies)}
            </React.Fragment>
        )
    }
}

export default MovieList;