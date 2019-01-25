module.exports = {
    get: (request, response, next) => {
        const dbInstance = request.app.get('db')
        dbInstance.get_inventory()
        .then(inventory => response.status(200).send(inventory))
    },

    post: (request, response, next) => {
        const dbInstance = request.app.get('db')
        const {product_name, product_price, image_url} = request.body
        dbInstance.create_product([product_name, product_price, image_url])
        .then(newProduct => response.sendStatus(200))
    },

    // update: (request, response, next) => {
    //     const db = request.app.get('db')

    // },

    // delete: (request, response, next) => {
    //     const db = request.app.get('db')

    // }
}