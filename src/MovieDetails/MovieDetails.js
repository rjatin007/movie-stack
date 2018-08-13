import React from 'react';
import './MovieDetails.css';
const MovieDetails = ({ movie , hide })=> {
    let dateStr = new Date(movie.release_date).toUTCString();
    return (
        <div className='movie-details-container'>

            { movie !== null ? (
            <div className='movie-details'>
                <div className='title-header'>
                   <h1>{movie.title}</h1>
                   <h3>{movie.tagline}</h3>
                </div>
                <div className='details'>
                       <p>Release Date : {dateStr.slice(0,dateStr.indexOf('00'))} UTC time</p>
                       <p>Average : {movie.vote_average}/10</p>
                </div>
                <div className='genre-details'>
                    {movie.genres && movie.genres.length > 0 && movie.genres.map(g=>(<p className='genre'>{g.name}</p>))}
                </div>
                <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
                <div className='description'>
                   <p>{movie.overview}</p>
                </div>
                <div className='back-nav'>
                    <button className='back' onClick={hide} >Back</button>
                </div>
            </div>

           ) : (<p>No details available</p>)
       }
       </div>
    );

}


export default MovieDetails;
