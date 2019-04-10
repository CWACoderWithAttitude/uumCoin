'use strict';
const BlockChain = require('buildChain')
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

  res.send('Hello world\n' + JSON.stringify(BlockChain));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
