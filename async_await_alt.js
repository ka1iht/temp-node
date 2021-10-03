const {readFile, writeFile} = require('fs').promises
const util = require("util")

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// function getText(path){
//     return new Promise(function (resolve, reject){
//         readFile(path, "utf8", function(err, result){
//             if(err)
//                 reject(err)
//             else
//                 resolve(result)
//         })
//     })
// }

// getText("./pathtesting/subfolder/text.txt")
// .then(function (value){
//     console.log(value)
// })
// .catch(function (errdata){
//     console.log(errdata)
// })

async function start(){
    try {
        const first = await readFile("./pathtesting/subfolder/text.txt", "utf8")
        await writeFile("./pathtesting/result_async_await.txt", `this is a text generated via an async await method with promises: ${first}`, {flag: "a"})
        console.log(first)
    } catch (error) {
        console.log(error)
    }
}

start()