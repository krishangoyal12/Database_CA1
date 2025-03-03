const express = require('express')
const app = express()

const {Restaurant, Item} = require('./Models/schema')

const PORT = 8080

app.get('/', (req,res)=>{
    res.json('This is Home Route')
})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})