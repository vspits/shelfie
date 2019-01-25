import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(){
        super()
        this.state = {
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

    render(){
        return(
            <div>
                <div>Form</div>
                <input onChange={(event) => this.handleImageInput(event.target.value)}/>
                <input onChange={(event) => this.handleNameInput(event.target.value)}/>
                <input onChange={(event) => this.handlePriceInput(event.target.value)}/>
                <button onClick={() => this.handleCancel(this.state)}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form