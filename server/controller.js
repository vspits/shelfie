module.exports = {
    get: (request, response, next) => {
        const dbInstance = request.app.get('db')
        dbInstance.get_inventory()
        .then(inventory => response.status(200).send(inventory))
        .catch(err => {
            response.status(500).send({errorMessage:'Try again, not werkin'})
        })
    },

    post: (request, response, next) => {
        const dbInstance = request.app.get('db')
        const {product_name, product_price, image_url} = request.body
        dbInstance.create_product([product_name, product_price, image_url])
        .then(newProduct => response.sendStatus(200))
        .catch(err => {
            response.status(500).send({errorMessage:'Try again, not werkin'})
        })
    },
    
    delete: (request, response, next) => {
        const dbInstance = request.app.get('db')
        const {id} = request.params
        dbInstance.delete_product([id])
        .then(deletedProduct => response.sendStatus(200))
        .catch(err => {
            response.status(500).send({errorMessage:'Try again, not werkin'})
        })
    },

    // update: (request, response, next) => {
    //     const dbInstance = request.app.get('db')
    //     const {id} = request.params
    //     const {product_name, product_price, image_url} = request.body
    //     dbInstance.update_product()


    // },
}