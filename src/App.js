import React, { Component } from 'react';
import './App.css';
import ListMovies from './ListMovies/ListMovies';
import * as MovieActions from './store/actions';
import { connect } from 'react-redux';
import MovieDetails from './MovieDetails/MovieDetails';
import SearchBar from './Search/SearchBar/SearchBar';
class App extends Component {

  componentDidMount=()=>{
    this.props.getNowPlaying();
  }
  render() {
    const { movies ,
          showDetails ,
          movie ,
          upcoming ,
          getNowPlaying ,
          getUpcomingMovies,
          search,
          hideDetails
        } = this.props;
    console.log(movies)
    return (
      <div className="App">
        <nav>
          <h1>Movie Stack</h1>
          <SearchBar/>
        </nav>
        <div className='upcoming-nav'>
          { upcoming ===false ?
          <button className='upcoming' onClick={()=>getUpcomingMovies()} >Upcoming</button>
          :
          <button className='upcoming' onClick={()=>getNowPlaying()} >Now Playing</button>
          }
        </div>
        <div className='container'>
          {showDetails === false ?
            ( movies!== null && (movies!== undefined)  && <ListMovies upcoming={upcoming} search={search} movies={movies}/> )
            :
            ( movie !== null && <MovieDetails hide={hideDetails} movie={movie}/>)
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    movies : state.movies,
    showDetails : state.showDetails,
    movie:state.movie,
    upcoming : state.upcoming,
    search: state.search
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    getUpcomingMovies : () => dispatch(MovieActions.getUpcomingMovies()),
    getNowPlaying : ()=> dispatch(MovieActions.getNowPlaying()),
    hideDetails : ()=>dispatch(MovieActions.hideDetails())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
