import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { allMovies } from '../../functions/data';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

const Home = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() =>{
        allMovies(setMovies)
    },[])

    return(
        <Fragment>
            <Navbar></Navbar>
            {movies != null ? (
                movies.map(movie => (
                    <h1 key={movie.id}>{movie.title}</h1>
                ))
            ) : ('cargando...')}
            <Footer></Footer>
        </Fragment>
    )
}

export {Home}