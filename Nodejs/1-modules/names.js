const name1 = 'nithish';
const name2 = 'dharneesh';
const name3 = 'siva';


module.exports.items = ['item1' , 'item2'];

console.log(this.items[0]);     // when your Are using Exporting the item in Alternarive Syntax                         
                               // then if you have to access the item means you have to use this keyword before it. 
console.log(this.items[1]);

module.exports = {
    name1,
    name2,
    name3
};