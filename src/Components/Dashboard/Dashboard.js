import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{

    render(){
        let mappedInventory = this.props.inventoryList.map(item => {
            return (
                <Product 
                    key={item.index}
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