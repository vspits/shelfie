import React from 'react'
// import axios from 'axios'

function Product(props){
    return(
        <div className='productComponent'>
            <div className='productImage'>
                {props.image}
            </div>
            <div className='productRightSide'>
                <div className='productText'>
                    <div>{props.name}</div>
                    <div>{props.price}</div>
                </div>
                <div className='buttons'>
                    <button className='deleteButton' onClick={() => props.deleteProduct()}>Delete</button>
                    <button className='editButton' >Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Product