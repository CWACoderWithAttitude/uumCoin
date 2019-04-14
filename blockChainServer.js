'use strict'

const Block = require('./Block')
const UuMChain = require('./UuMChain')
const express = require('express')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

const difficulty = 5
// App
const app = express()

//  express: set status code
//   https://stackoverflow.com/questions/26066785/proper-way-to-set-response-status-and-json-content-in-a-rest-api-made-with-nodej

// https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
app.use(require('body-parser').json())

app.get('/', (req, res) => {
  var uumChain = new UuMChain(difficulty)
  uumChain.addBlock('{from: volker, to: taghreed, betrag: €4.50}')
  uumChain.addBlock('{from: michael, to: benedikt, betrag: €5.00}')
  uumChain.addBlock('{from: taghreed, to: markus, betrag: €0.50}')
  uumChain.addBlock('{from: volker, to: taghreed, betrag: €50.50}')
  res.send('This is the Unterschied & Macher BlockChain:<br>' + JSON.stringify(uumChain))
});

app.post('/', (req, res) => {
  const data=req.body.data
  
  var uumChain = new UuMChain(difficulty)
  uumChain.addBlock(data)
  res.status(201).send('received post request, data=' + data)
})

app.get('/get', (req, res) => {
  var uumChain = new UuMChain(difficulty)
  const chain = uumChain._chain
  res.send(JSON.stringify(chain))
})
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
