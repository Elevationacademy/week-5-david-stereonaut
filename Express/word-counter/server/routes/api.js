const express = require('express')
const router = express.Router()
const validator = require('validator')

let wordCounter = {}

let blackList = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"]

router.get('/sanity', function(req, res){
    res.send("Server up and running")
})

router.get('/word/:word', function(req, res){
    let word = req.params.word.toLowerCase()
    if (wordCounter[word]){
        res.send({count: wordCounter[word]})
    } else {
        res.send({count: 0})
    }
})

router.post('/word', function(req, res){
    let postWord = req.body.word.toLowerCase()
    if (wordCounter[postWord]){
        wordCounter[postWord]++
    } else {
        wordCounter[postWord] = 1
    }
    res.send({text: `Added ${postWord}`, currentCount: wordCounter[postWord] })
})

router.post('/words/:sentence', function(req, res){
    let words = req.params.sentence.toLowerCase().split(" ")
    let numNewWords = 0
    let numOldWords = 0
    words.forEach(w => {
        if (wordCounter[w]){
            wordCounter[w]++
            numOldWords++
        } else {
            wordCounter[w] = 1
            numNewWords++
        }
    })
    res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

router.get('/total', function(req, res){
    let totalCount = 0
    Object.values(wordCounter).forEach(value => totalCount += value)
    res.send({text: "Total count", count: totalCount })
})

module.exports = router