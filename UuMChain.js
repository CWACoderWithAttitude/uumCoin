'use strict'
const Block = require('./Block')
const fs = require('fs')

module.exports = class BlockChain {
  constructor(difficulty) {
    var newBlock = new Block('Genesis', '0x01')
    newBlock.calcHash()
    this._chain = [newBlock]

    this.difficulty = difficulty
  }

  addBlock(data) {
    const lastBlock = this._chain[this._chain.length - 1]
    var block = new Block(data, lastBlock.hash)
    block.id = lastBlock.id + 1
    block.calcHash()
    block.mineBlock(this.difficulty)
    this._chain.push(block)
    this.saveChainToFile()
  }

  saveChainToFile(){
    fs.writeFile('uumChain.json', JSON.stringify(this._chain), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }

    console.log("The file was saved!");
    })
  }
}
