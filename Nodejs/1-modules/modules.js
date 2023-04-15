const names = require('./names');

console.log(names); // Object Literal From Names.js


const sayhello = (name) => {
    console.log('Hello Mr.',name);
}


sayhello(names.name1);
sayhello(names.name2);
sayhello(names.name3);



