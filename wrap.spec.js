const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Has the length of a line smaller than 20', () => {
    let str = 'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
    let test = wrap(str).split('\n').every((elem) => elem.length<=21)
    //   expect(wrap('Lorem ipsum dolor sit eu amet, elit namagna sem amet nulla vel purus ac ligula.').indexOf('\n')).to.be.below(21)
    expect(test).to.equal(true)
  });
  it(`Doesn't break the word at the end of the line`, () => {
    let str = 'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
    let strArr = str.split(' ')
    expect(wrap(str).split('\n').split(' ')).to.equal(strArr);
  })
});

// has the length of a line smaller than 20
/*
Lorem ipsum dolor\n
sit eu amet, elit na\n
magna sem amet nulla
vel purus ac ligula.
*/


// does't break the word at the end of the line
// adds a new line break after the column length