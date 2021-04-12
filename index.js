const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const{connectToDB} = require('./db')

const app = express()

app.use(cors())
app.use(bodyParser.json())
connectToDB()

require('./routes/userRoutes')(app)

app.listen(3000, ()=>{
    console.log('Nos hemos conectado!!')
})