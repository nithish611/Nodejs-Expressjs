const os = require('os');

console.log(os);

console.log('--------------------------------------------------');
// Information About Current User
const userInfo = os.userInfo();

console.log(userInfo);
console.log('--------------------------------------------------');

//Method return the System Uptime in second
const uptime = os.uptime();

console.log("The System Up time is :" ,uptime);

console.log('--------------------------------------------------');
//Operating Sysytem Full Properties

const currentOS = {
    name:os.type(),
    release:os.release() ,
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOS);
console.log('--------------------------------------------------');