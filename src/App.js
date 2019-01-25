import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Product from './Components/Product/Product'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventoryList: [],
      name: '',
      price: '',
      image: ''
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory(){
    axios.get(`/api/inventory`)
    .then(response => {
      console.log(response.data)
      this.setState({inventoryList: response.data})
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Dashboard 
          inventoryList={this.state.inventoryList}
          getInventory={this.getInventory}>

          <Product 
            getInventory={this.getInventory}/>
            
        </Dashboard>

        <Form 
          getInventory={this.getInventory}/>
      </div>
    );
  }
}

export default App;
