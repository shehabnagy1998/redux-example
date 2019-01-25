import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

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
          <Route path="/about" component={Contact} />
          <Route path="/contact" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
