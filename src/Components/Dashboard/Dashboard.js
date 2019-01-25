import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{

    render(){
        let mappedInventory = this.props.inventoryList.map((item, index) => {
            return (
                <Product 
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}/>
            )
        })

        return(
            <div>
                Dashboard
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard