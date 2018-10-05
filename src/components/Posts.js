import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //connects components to redux store
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  //fires off when the app loads up
  componentWillMount() {
    this.props.fetchPosts();
  }

  //adds the single post to the top of the list
  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map( post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

//get our new items from the state from the redux store and map it to properties inside of our components
const mapStateToProps = state => ({
  //posts is defined in postReducer, and we want the items inside
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);