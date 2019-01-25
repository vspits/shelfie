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


app.get(`/api`)
app.post(`/api`)
app.put(`/api`)
app.delete(`/api`)

const port = process.env.PORT

app.listen(port, () => console.log(`${port} is werkin real hard`))