import React, { Component } from 'react';

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        firstName: '',
        lastName: '',
        age: 0,
        city: '',
        job: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  handleChange(e) {
    let { name, value, type } = e.target;

    if(type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value)
        })
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form className='profile-form'
      onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input
            name='firstName'
            type='text'
            value={this.state.profile.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name='lastName'
            type='text'
            value={this.state.profile.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Age:
          <input
            name='age'
            type='number'
            // value={this.state.profile.age}
            onChange={this.handleChange}
          />
        </label>
        <label>
          City:
          <input
            name='city'
            type='text'
            value={this.state.profile.city}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Job:
          <input
            name='job'
            type='text'
            value={this.state.profile.job}
            onChange={this.handleChange}
          />
        </label>
        <button type='submit'>Done</button>
      </form>
    )
  }
}

export default ProfileForm;
