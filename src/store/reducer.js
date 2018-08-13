import {action_types} from './actions';

const initialState={
    movies : null,
    showDetails : false,
    movie : null,
    query:'',
    upcoming :false,
    search: false
};

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case action_types.GET_UPCOMING_MOVIES:
        console.log(action);
        return {
            ...state,
            movies:[...action.movies],
            upcoming:true,
            showDetails:false,
            search:false
        };
        case action_types.GET_NOW_PLAYING:
        return {
            ...state,
            movies:[...action.movies],
            upcoming:false,
            showDetails:false,
            search:false
        }
        case action_types.GET_DETAILS:
        console.log(action)
        return{
            ...state,
            movie: {...action.movie},
            showDetails:true,
            upcoming:false,
            search :false
        }
        case action_types.UPDATE_QUERY:
        return{
            ...state,
            query : action.query,
            search : action.query !== '' ? true : false
        }
        case action_types.SEARCH_MOVIES:
        return {
            ...state,
            movies :action.movies,
            upcoming:false,
            showDetails:false,
        }
        case action_types.HIDE_DETAILS:
        return {
            ...state,
            showDetails :false
        }
    }

    return state;
}

export default reducer;