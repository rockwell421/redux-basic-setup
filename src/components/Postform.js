import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    }
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        //what we're going to submit
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post); //replaces the fetch
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title:</label>
                <br />
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.onChange} 
                />
            </div>
            <div>
                <label>Body: </label>
                <br />
                <textarea 
                    name="body"
                    value={this.state.body}
                    onChange={this.onChange} 
                     />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Postform.PropTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);