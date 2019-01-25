import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
    
    deleteProduct(id){
        axios.delete(`/api/product/${id}`)
        .then(response => {
            this.setState({product: response.data})
            this.props.getInventory()
        })
    }

    render(){
        let mappedInventory = this.props.inventoryList.map((item) => {
            return (
                <Product 
                    key={item.index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    deleteProduct={this.deleteProduct}/>
            )
        })

        return(
            <div className='dashboard'>
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard