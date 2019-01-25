import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Post from './Components/Post';

class App extends Component {

  state = {
    
  };

  componentDidMount() {
    console.log('program started');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("program updated");
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/posts/:id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
