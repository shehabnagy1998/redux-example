import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Home = ({posts})=> {
    const postList = posts.length ? (
        posts.map(res=> {
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

const mapStateToProps = (state)=> {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)