const http = require('http');
console.log(http);

const server = http.createServer((req , res) =>{
    if(req.url == '/'){
        res.end('Welcome To Our Home Page');
    }
    if(req.url == '/about'){
        res.end('HellooHere is about page')
    }
    res.end()
})


server.listen(5000 , () => {
    console.log("Server Is Running On Port 5000");
})