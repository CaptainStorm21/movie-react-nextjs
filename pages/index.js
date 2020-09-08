import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Carausel from '../components/carausel';
import Footer from '../components/Footer';
import MovieList from '../components/movie-list';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

//importing MOVIE DATA function
import { getMovies } from '../actions';

class Home extends React.Component {
    //const[movies, setMovies] = useState([]);

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        getMovies().then((movies) => {
            this.setState({ movies })
        })
    }
    /*    state = {
            movies: []
        }*/

    //called only once when component is mounted
    //async componentDidMount() {
    //    const movies = await getMovies()
    //    this.setState({ movies })
    //}

    //useEffect(() => {
    //    const fetchData = async () => {
    //        const resMovies = await getMovies()
    //        setMovies(resMovies)
    //    }
    //    fetchData();
    //});

    render() {
        const { movies } = this.state
        return (
            <div>
                <Head>
                    <title>Home</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                </Head>
                <Navbar />

                <div className="container-fluid home-page">

                    <div className="row mt-4">
                        <Sidebar
                            appName="Movie Archive"
                        />
                        <div className="col-lg-9">
                            <Carausel />
                            <div className="row">
                                <MovieList
                                    movies={movies}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

                <style jsx>
                    {`
          .home-page {
               background-color: #fafafa;
                margin-top: 30px;
        `}
                </style>
            </div >
        )
    }
}

//const Home = () => {
//    const [movies, setMovies] = useState([]);

//    useEffect(() => {
//        const fetchData = async () => {
//            const resMovies = await getMovies()
//            setMovies(resMovies)
//        }
//        fetchData();
//    });

//    //debugger
//    //imporve this because now it is called
//    //empty array if nothing is found
//    //const movies = getMovies() || []
//    //debugger

//    ////useEffect
//    //useEffect(() => {
//    //    getMovies().then((movies) => {
//    //        //debugger
//    //        setMovies(movies)
//    //    })
//    //}, [])

//    //debugger

//    return (
//        <div>
//            <Head>
//                <title>Home</title>
//                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//            </Head>
//            <Navbar />

//            <div className="container-fluid home-page">

//                <div className="row mt-4">
//                    <Sidebar
//                        appName="Movie Archive"
//                    />
//                    <div className="col-lg-9">
//                        <Carausel />
//                        <div className="row">
//                            <MovieList
//                                movies={movies}
//                            />
//                        </div>
//                    </div>
//                </div>
//            </div>
//            <Footer />

//            <style jsx>
//                {`
//          .home-page {
//               background-color: #fafafa;
//                margin-top: 30px;
//        `}
//            </style>
//        </div >
//    )
//}

export default Home;