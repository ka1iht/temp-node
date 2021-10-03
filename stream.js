const {createReadStream} = require('fs')

const readStream = createReadStream("./pathtesting/bigFile.txt", {highWaterMark: 100000})

readStream.on("data", function(result){
    console.log(result)
})