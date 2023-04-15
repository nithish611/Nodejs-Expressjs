const path = require('path');
console.log(path);


const filepath = path.join('/ExampleForBuilt-in-Module' , 'path.txt');
console.log(filepath);



const base = path.basename(filepath);
console.log(base);


const absolute = path.resolve(__dirname ,'/Nodejs-Expressjs', 'Nodejs' ,'ExampleForBuilt-in-Module' , 'path.txt');
console.log(absolute);