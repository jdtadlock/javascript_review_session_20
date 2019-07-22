import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  state = {
    shops: [],
    title: 'Our awesome app!'
  }
  // Get all shops
  // Make a request initially when component loads
  // for all the shop data
  componentDidMount() {
    axios.get('/api/shops')
      .then(res => {
        // all the data on res.data
        console.log(res.data.shops);
        this.setState({
          shops: [...res.data.shops] // array of shops -- don't mutate!
        });
      });
  }

  // Loop through them and show all the shops in our view
  // Render is just called when the component loads and shows
  // your HTML and any related outputted data inside
  render() {
    return (
      <div>
        <h1>Main View</h1>
        {/* Loop through and show all shops */}
        {this.state.shops.map(shop => (
          <div key={shop.name} className="shop">
            <h2>{shop.name}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default Main;