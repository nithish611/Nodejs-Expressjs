const {readFileSync , writeFileSync , readFile , writeFile} = require('fs');     // Only Destructuring The ReadfileSynce Function
// readFileSync();
// writeFileSync();

// const fs = require('fs');                
// fs.readFileSync();
// fs.writeFileSync();

// Same as Above Code here All the objects And Functions


const firstfile = readFileSync('../ExampleForBuilt-in-Module/first.txt' , 'utf8'); 

const secondfile = readFileSync('../ExampleForBuilt-in-Module/second.txt' , 'utf8');

console.log(firstfile , secondfile);


writeFileSync(
    '../ExampleForBuilt-in-Module/first-second.txt' ,
     `Combining Both File Data : ${firstfile} , ${secondfile}`,
     {flag : 'a'} //This Is Third Argument To update 
);


readFile('../ExampleForBuilt-in-Module/first.txt','utf8', (err , result) => {
    if(err ){
        console.log(err);
    }
    else{
        console.log(result);
    }

    const first = result;
     
})

