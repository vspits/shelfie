import React, { Component } from 'react'
import axios from 'axios'

function Product(props){
    return(
        <div>
            {props.image}
            {props.name}
            {props.price}
        </div>
    )
}

export default Product