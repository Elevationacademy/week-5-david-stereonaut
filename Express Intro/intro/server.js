const express = require('express')
const app = express()
const path = require('path')

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get("/books/:bookID", function(request, response){
    let bookID = request.params.bookID
    response.send(data[bookID])
})

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

app.get('/', function(request, response){
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")

})

app.get("/life", function(request, response){
    response.send("42")
})

app.get('/users/:userID', function (request, response) {
    response.send(`${users[request.params.userID]}`)
})

app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})

app.get("/details", function(request, response){
    let params = request.query
    console.log(params.city)
    response.send(params)
})

const port = 3000
app.listen(port, function(){
    console.log("Server is running on port " + port)
})
