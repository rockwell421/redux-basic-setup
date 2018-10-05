//evaluates actions committed: fetching data, creating posts, etc
import { FETCH_POSTS, NEW_POST } from '../actions/types';

//represents the posts and single post from the action
const initialState = {
    items: [],
    item: [],
}

//evaluates action type to send to reducer
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload 
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default: 
            return state;
    }
}