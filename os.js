const os = require("os")
console.log(os.userInfo())
console.log(`The current System uptime is ${os.uptime()}`);

const osInfo = {
    name: os.type(),
    type: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(osInfo);