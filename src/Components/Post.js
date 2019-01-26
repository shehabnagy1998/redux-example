import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { deletePost } from '../Actions/Post';

class Post extends Component  {

    deletePost = (e)=> {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    postItem = this.props.post ? (
        <div>
             <h1 className="center">{this.props.post.title}</h1>
             <p>{this.props.post.body}</p>
             <div className="center">
                 <button className="btn grey" onClick={this.deletePost}>Delete Post</button>
             </div>
        </div>
     ) : (
         <div className="progress">
             <div className="indeterminate"></div>
         </div>
    );

    render(){ 
        return(
            <div className="container">
                {this.postItem}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps)=> {
    let id = ownProps.match.params.id;
    return {
        post: state.posts.find(res=> res.id == id)
    }
}

const mapDispatch = (dispatch)=> {
    return {
        deletePost: (id)=> {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatch)(Post)