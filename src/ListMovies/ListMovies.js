import React , { Component } from 'react';
import './ListMovies.css';
import MovieCard from '../MovieCard/MovieCard';
class ListMovies extends Component {

    render(){
        const { movies , upcoming , search } = this.props;
        let shownMovies = movies, title='Now Playing';
        if(upcoming){
            let date;
            title='Upcoming'
            const SysDate= new Date().getTime();
            console.log(SysDate);
            // to show movies that are releasing after or on present day
            shownMovies = movies.filter(m=>{
                date = new Date(m.release_date);
                if(date.getTime() >= SysDate){
                    return m;
                }
            })
        }
        if(search){
            title= 'Search Results'
        }
        // console.log(upcoming)
        return (
            <div className='list-movies'>
                <div className='list-movies-header'>
                    <h1>{title}</h1>


                </div>
                <hr/>
                <div className='movies-container'>
                    {shownMovies.length > 0 ? movies.map(m=>
                        <MovieCard movie={m} key={m.id}/>
                    ): <p>No upcoming movies</p>}

                </div>
            </div>
        )
    }

}

export default ListMovies;
