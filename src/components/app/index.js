import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from '../nav'
import ProfileForm from '../profile-form';
import ProfileDisplay from '../profile-display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { profile: {} };
  }

  componentDidMount() {
    console.log('__STATE__', this.state);
  }

  profileUpdate(profile) {
    
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <header>
              <h1>Profile App</h1>
              <Nav />
            </header>
            <Route exact path='/edit' component={
              () => <ProfileForm
                handleSubmit={this.profileUpdate}
              />}
            />
            <Route exact path='/' component={
              () => <ProfileDisplay/>}
            />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
