import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
  state = {
    name: ''
  }

  onSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.name);
    axios.post('/api/shop', {
      name: this.state.name
    }).then(res => {
      // Maybe redirect to Main?
      this.setState({
        name: ''
      });

      this.props.history.push('/');
    });
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Create Coffee Shop</h3>
        <input onChange={this.handleChange} type="text" placeholder="Name of Shop" value={this.state.name} />
        <button>Submit</button>
      </form>
    )
  }
}

export default withRouter(Form);