const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function(request, response){
    let name = request.params.name
    store.forEach(s => {
        if (s.name === name){
            response.send({price: s.price})
        }
    })
    response.send({price: null})
})

app.get("/buy/:name", function(request, response){
    let name = request.params.name
    store.forEach(s => {
        if (s.name === name){
            s.inventory--
            response.send(s)
        }
    })
})

app.get("/sale/:admin", function(request, response){
    console.log(request.params.admin)
})

const port = 3000
app.listen(port, function(){
    console.log("Server is up and running smoothly")
})