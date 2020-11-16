const moment = require('moment')

let timeNow = new Date()
console.log(timeNow)

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017

const urllib = require('urllib')

urllib.request('http://www.omdbapi.com/?apikey=9ebc7b1b&t=The%20Lion%20King', function(err, result) {
    console.log(JSON.parse(result.toString()).Released)
})