import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  state = {
    shops: []
  }
  // Get all shops
  // Make a request initially when component loads
  // for all the shop data
  componentDidMount() {
    axios.get('/api/shops')
      .then(res => {
        // all the data on res.data
        let shops = res.data.shops;

        shops = shops.map(shop => {
          shop.coffee = '';
          shop.type = '';
          return shop;
        });
        console.log(shops);
        this.setState({
          shops: shops // array of shops -- don't mutate!
        });
      });
  }

  addCoffee = (event) => {
    event.preventDefault();

    let shops = [...this.state.shops];

    let shop = shops.find(shop => shop._id === event.target.dataset.id);

    let { coffee, type } = shop;

    axios.post('/api/coffee', {
      shopId: shop._id,
      coffee: coffee,
      type: type
    }).then(res => {

      shop.coffees.push({
        name: coffee,
        type: type
      });

      this.setState({
        shops: shops
      });

    });
  }

  handleChange = (event) => {
    let id = event.target.id;

    let shops = [...this.state.shops];

    let shop = shops.find(shop => shop._id === id);

    shop[event.target.name] = event.target.value;

    this.setState({
      shops: [...shops]
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
        <div className="shops">
          {this.state.shops.map((shop, shop_index) => (
            <div key={shop_index} className="shop">
              <h2>{shop.name}</h2>

              <form data-id={shop._id} onSubmit={this.addCoffee} className="column">
                <input name="coffee" id={shop._id} onChange={this.handleChange} type="text" value={shop.coffee} placeholder="Coffee Name" />
                <input name="type" id={shop._id} onChange={this.handleChange} type="text" value={shop.type} placeholder="Coffee Type" />
                <button>Add Coffee</button>
              </form>

              <div className="coffees">
                {shop.coffees.map((coffee, coffee_index) => (
                  <div key={coffee_index} className="coffee">
                    <h5>{coffee.name}</h5>
                    <p>{coffee.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Main;