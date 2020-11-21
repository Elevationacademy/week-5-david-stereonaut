const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

router.get('/wonders', function (req, res) {
    res.send(wonders)
})

router.post('/wonder', function (req, res) {
    console.log("Someone's trying to make a post request")
    req.body.visited = false
    wonders.push(req.body)
    console.log(wonders)
    res.end()
})

router.put('/wonder/:name', function (req, res) {
    wonders.find(w => w.name === req.params.name).visited = true
    res.end()
})

router.delete('/wonder/:name', function(req, res) {
    wonders.splice(wonders.findIndex(w => w.name === req.params.name), 1)
    console.log(wonders)
    res.end()
})

module.exports = router