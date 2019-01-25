const express = require('express')
require('dotenv').config()
const massive = require('massive')
const bodyParser = require('body-parser')
const controller = require('./controller')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err))


app.get(`/api/inventory`, controller.get)
app.post(`/api/product`, controller.post)
app.delete(`/api/product/:id`, controller.delete)
// app.put(`/api/product/:id`, controller.update)

const port = process.env.SERVER_PORT

app.listen(port, () => console.log(`${port} is werkin real hard`))