const express = require('express')
const app = express()
const port = 3000

// const bodyParser = require('body-parser')

const customer = require('./routes/customer-routes')

const item = require('./routes/item-routes')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/customer',customer)

app.use('/item',item)

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})