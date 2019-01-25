import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Post extends Component {

    state = {
        post: {}
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=> {
            this.setState({
                post: res.data
            })
        })
    }

    render() {
        const post = this.state.post ? (
           <div>
                <h1 className="center">{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
           </div>
        ) : (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
};

export default Post