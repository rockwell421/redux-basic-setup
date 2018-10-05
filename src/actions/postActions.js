import { FETCH_POSTS, NEW_POST } from './types';

//dispatches(resolver) the data using thunk middleware asynchronously to our reducer
export const fetchPosts = () => dispatch => {
    // console.log('fetching posts and dispatching to items reducer');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => result.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
        })
    );
};

//dispatches new post to reducer
export const createPost = (postData) => dispatch => {
    // console.log("action called: creating new post");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => 
        dispatch({
            type: NEW_POST,
            payload: post
    }))
};
