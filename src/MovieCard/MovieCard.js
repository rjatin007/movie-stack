import React , { Component } from 'react';
import './MovieCard.css';
import { connect } from 'react-redux';
import {getDetails} from '../store/actions';
class MovieCard extends Component {
    render(){
        const { movie , getDetails } = this.props;
        const image=`http://image.tmdb.org/t/p/w342/${movie.poster_path}`
        let dateStr = new Date(movie.release_date).toUTCString();
        return (
            <div className='movie-card'  >
                <div className='image-container'>
                    <img src={image}/>
                </div>
                <div className='details-container'>
                    <h3>{movie.title}</h3>
                    <p>{dateStr.slice(0,dateStr.indexOf('00'))} UTC Time</p>
                </div>
                <button className='movie-details-nav'
                    onClick={()=>getDetails(movie.id)}>
                    View
                </button>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch=>({
    getDetails : (id) => dispatch(getDetails(id))
})
export default connect(null,mapDispatchToProps)(MovieCard);