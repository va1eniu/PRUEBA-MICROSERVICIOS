const express = require('express');
const router = express.Router()
const app = express()

require('dotenv').config()
const port = process.env.PORT 

const routerBase = require('./routes/routes.js')
app.use('/medicamentos', routerBase)

app.use(express.json());

app.listen(port,()=>{
    console.log('Hola a todos!!');
})
