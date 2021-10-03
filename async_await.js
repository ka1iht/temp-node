const {readFile, writeFile} = require('fs')

function getText(path){
    return new Promise(function (resolve, reject){
        readFile(path, "utf8", function(err, result){
            if(err)
                reject(err)
            else
                resolve(result)
        })
    })
}

// getText("./pathtesting/subfolder/text.txt")
// .then(function (value){
//     console.log(value)
// })
// .catch(function (errdata){
//     console.log(errdata)
// })

const start = async function(){
    try {
        const first = await getText("./pathtesting/subfolder/text.txt")
        console.log(first)
    } catch (error) {
        console.log(error)
    }
}

start()