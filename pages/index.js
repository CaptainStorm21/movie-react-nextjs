import Head from 'next/head';
import React, { useState } from 'react';
import Carausel from '../components/carausel';
import Footer from '../components/Footer';
import MovieList from '../components/movie-list';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const Home = () => {
    const [count, whateverIwant] = useState(0);
    const increment = () => {
        // setCount(count + 1)
        whateverIwant(count + 1)
    }

    const decrement = () => {
        // setCount(count - 1)
        whateverIwant(count - 1)
    }

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
                    <Sidebar count={count}
                        appName="Movie Archive"
                        clickHandler={() => { alert ("prop click") }}   
                    />
                    <div className="col-lg-9">
                        <Carausel />
                        <div className="row">
                            <MovieList count={count}/>
                        </div>
                    </div>
                    <button className="btn btn-primary mx-2"
                            onClick={increment}> Add </button>
                    <button className="btn btn-warning"
                            onClick={decrement}> Remove </button>
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

export default Home;