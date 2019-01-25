const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive')

const app = express()
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then(db => app.set('db', db))
    .catch(err => console.log(err))


app.get(`/api/inventory`, controller.get)
app.post(`/api/product`, controller.post)
// app.put(`/api/product/:id`, controller.update)
// app.delete(`/api/product/:id`, controller.delete)

const port = process.env.SERVER_PORT

app.listen(port, () => console.log(`${port} is werkin real hard`))