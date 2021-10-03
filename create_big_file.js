const {writeFileSync} = require('fs')
for(let i = 0; i < 10000; i++)
    writeFileSync("./pathtesting/bigFile.txt", `Index: ${i}\n`, {flag: "a"})