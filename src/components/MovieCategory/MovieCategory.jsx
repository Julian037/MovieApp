import React from 'react'

const MovieCategory = ({movies}) => {
  return (
    <>
        {movies != null ? (
        movies.map(movie => (
            <h1 key={movie.id}>{movie.title}</h1>
        ))
    ) : ('cargando...')}
    </>
  )
}

export default MovieCategory