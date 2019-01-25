import React, { Component } from 'react';

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
      <div className="container">
        
      </div>
    );
  }
}
export default App;
