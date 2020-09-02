import React, { Component } from 'react';

class MovieList extends Component {
    render() {
        const { movies } = this.props

        return (
            <>
                {movies.map((movie) => {
                    return (<div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">{movie.name}</a>
                                </h4>
                                <h5>${movie.price }</h5>
                                <p className="card-text">{movie.description}</p>
                                <small> Release Year - {movie.releaseYear}</small>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{movie.rating}</small>
                                <br />
                                <small className="text-muted">{movie.genre}</small>

                            </div>
                            <h2>{this.props.count}</h2>
                        </div>
                    </div>
                    )
                })
                }
            </>
        );
    }
}
export default MovieList;