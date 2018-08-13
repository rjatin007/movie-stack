import * as API from "../API";
export const action_types = {
    GET_UPCOMING_MOVIES :'GET_UPCOMING_MOVIES',
    GET_KEYWORDS : 'GET_KEYWORDS',
    GET_DETAILS:'GET_DETAILS',
    SEARCH_MOVIES:'SEARCH_MOVIES',
    UPDATE_QUERY : 'UPDATE_QUERY',
    GET_NOW_PLAYING: 'GET_NOW_PLAYING',
    HIDE_DETAILS:'HIDE_DETAILS'
}


export const getNowPlaying = () =>{
    return dispatch=>{
        API.getNowPlaying().then(res=>{
            dispatch({
                type :action_types.GET_NOW_PLAYING,
                movies : res.results
            })
        })
    }
}
export const searchMovies = (query)=>{

    return dispatch => {
        dispatch({
            type : action_types.UPDATE_QUERY,
            query,
        })
        API.searchMovies(query).then(res=>{
            console.log(res)
            dispatch({
                type : action_types.SEARCH_MOVIES,
                movies : res.results
            })
        });
    }
}
export const getUpcomingMovies = () =>{
    return dispatch => {
        API.getUpcomingMovies().then(res=>{
            dispatch({
                type : action_types.GET_UPCOMING_MOVIES,
                movies: res.results
            })
        })
    }
}
export const getDetails = (id)=>{
    return dispatch =>{
        API.getDetails(id).then(res=>{
            dispatch({
               type: action_types.GET_DETAILS,
               movie : res
            })
        })
    }
}

export const hideDetails=()=>{
    return dispatch => dispatch({
        type:action_types.HIDE_DETAILS
    })
}