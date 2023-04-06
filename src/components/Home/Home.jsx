import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { allMovies } from '../../functions/data';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import MovieCategory from '../MovieCategory/MovieCategory';

const Home = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() =>{
        allMovies(setMovies)
    },[])

    return(
        <Fragment>
            <Navbar></Navbar>
            <MovieCategory 
                movies={movies}
            />

            <Footer></Footer>
        </Fragment>
    )
}

export {Home}