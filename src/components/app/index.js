import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <header>
          <h1>Does it work?</h1>
        </header>
      </main>
    );
  }
}

export default App;
