import React , { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../store/actions';
import './SearchBar.css';
class SearchBar extends Component{

    render(){
        const { query, search } = this.props;
        return (
            <div className='search-bar'>
                <input type="text"
                  value={query}
                  placeholder='Search Movie...'
                  onChange={(event)=>search(event.target.value)}/>
            </div>
        )
    }
}
const mapStateToProps = state=>({
    query: state.query
})
const mapDispatchToProps = dispatch=>({
    search:(query) => dispatch(searchMovies(query))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);