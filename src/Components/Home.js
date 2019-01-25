import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Home extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=> {
            this.setState({
                posts: res.data
            })
        })
    }

    render() {

        const postList = this.state.posts.length ? (
            this.state.posts.map(res=> {
                return(
                    <div className="card" key={res.id}>
                        <div className="card-content">
                            <Link to={'/posts/' + res.id } className="card-title">{res.title}</Link>
                            <p>{res.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )

        return(
            <div className="container">
                <h1 className="center">Home</h1>
                {postList}
            </div>
        )
    }
};

export default Home