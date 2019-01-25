import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            newProduct: [],
            imageInput: '',
            nameInput: '',
            priceInput: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleImageInput = this.handleImageInput.bind(this)
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handlePriceInput = this.handlePriceInput.bind(this)
    }

    handleImageInput(value){
        this.setState({imageInput: value})
    }

    handleNameInput(value){
        this.setState({nameInput: value})
    }

    handlePriceInput(value){
        this.setState({priceInput: value})
    }

    handleCancel(){
        this.setState({
            imageInput: this.imageInput,
            nameInput: this.nameInput,
            priceInput: this.priceInput
        })
    }

    createProduct(){
        const bodyObj = {
            product_name: this.state.nameInput,
            product_price: this.state.priceInput,
            image_url: this.state.imageInput
        }
        axios.post(`/api/product`, bodyObj)
        .then(response => {
            this.props.getInventory()
        })
        this.setState({
            imageInput: this.props.image,
            nameInput: this.props.name,
            priceInput: this.props.price
        })
    }

    render(){
        return(
            <div>
                <div>Form</div>
                <input onChange={(event) => this.handleImageInput(event.target.value)}/>
                <input onChange={(event) => this.handleNameInput(event.target.value)}/>
                <input onChange={(event) => this.handlePriceInput(event.target.value)}/>
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={() => this.createProduct()}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form