'use strict'
const Block = require('./Block')
const fs = require('fs')
const uumChainFile = 'uumChain.json'
module.exports = class BlockChain {
  

  constructor(difficulty) {
    var newBlock = new Block('Genesis', '0x01')
    newBlock.calcHash()
    this._chain = [newBlock]
    this.getChainFromFile()
    this.difficulty = difficulty
  }
  /*
  initChainFromDisk(){
    var uumChain = fs.readFileSync(uumChainFile);
    if (uumChain){
      this.-chain = JSON.parse(uumChain)
    }
  }
  */
  addBlock(data) {
    const lastBlock = this._chain[this._chain.length - 1]
    var block = new Block(data, lastBlock.hash)
    block.id = lastBlock.id + 1
    block.calcHash()
    block.mineBlock(this.difficulty)
    this._chain.push(block)
    this.saveChainToFile()
  }
// https://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-file-into-server-memory
  getChainFromFile(){
    const uumChainString = fs.readFileSync(uumChainFile, 'utf8')
    //console.log('getChainFromFile1: uumChainString: ' + JSON.stringify(uumChainString))
    if (uumChainString){
      console.log('getChainFromFil2: uumChainString: ' + uumChainString)
      this._chain = JSON.parse(uumChainString)
    }else {
      console.log('getChainFromFile3: uumChainString: ' + JSON.stringify(this._chain))
    }
  }
  saveChainToFile(){
    fs.writeFileSync(uumChainFile, JSON.stringify(this._chain))
    console.log("The file was saved!");
  }
  /*
  saveChainToFile(){
    fs.writeFile(uumChainFile, JSON.stringify(this._chain), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }

    console.log("The file was saved!");
    })
  }
  */
}
