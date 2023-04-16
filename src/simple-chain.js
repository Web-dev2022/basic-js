const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain;
  },

  addLink(value = '') {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'string' || position < 1 || position > this.chain.length || position.toString().includes('.')) {
      throw new Error('You can\'t remove incorrect link!');
    }
    
    this.chain.splice((position - 1), 1);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = '';
    let delimiter = '~~';

    for (let i = 0; i < this.chain.length; i++) {
      if (i === this.chain.length - 1) {
        delimiter = '';
      }
      result += '( ' + this.chain[i] + ' )' + delimiter;
    }

    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};