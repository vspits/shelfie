import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Product from './Components/Product/Product'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventoryList: [
        {name: 'sticker', price: 1, image: 'muchimage'},
        {name: 'Keyboard', price: 15, image: 'suchwowimg'},
        {name: 'Phone Charger', price: 9, image: 'definatelyAnJPG'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header />

        <Dashboard inventoryList={this.state.inventoryList}>
          <Product />
        </Dashboard>

        <Form />
      </div>
    );
  }
}

export default App;
