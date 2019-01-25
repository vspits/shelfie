module.exports = {
    get: (request, response, next) => {
        const db = request.app.get('db')
        db.get_inventory()
        .then(inventory => response.status(200).send(inventory))
    },

    // post: (request, response, next) => {
    //     const db = request.app.get('db')

    // },

    // update: (request, response, next) => {
    //     const db = request.app.get('db')

    // },

    // delete: (request, response, next) => {
    //     const db = request.app.get('db')

    // }
}