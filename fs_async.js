const {readFile, writeFile} = require("fs")

readFile("./pathtesting/subfolder/text.txt", "utf8", function (err, result){
    if(err){
        return
        console.log(err)
    }
    console.log(result)
    const first = result
    readFile("./pathtesting/path.txt", "utf8", function (err, altresult){
        if(err){
            return
            console.log(err)
        }
        console.log(altresult)
        const second = altresult
        writeFile("./pathtesting/result.txt",
        `Here is the result from an async callback: ${first + " " + second}`,
        {flag:"a"}, function(err, altaltresult){
            if(err){
                return
                console.log((err));
            }
            console.log(altaltresult)
        })
    })
})    