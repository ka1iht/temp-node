const {readFileSync, writeFileSync} = require("fs")

const text = readFileSync("./pathtesting/subfolder/text.txt", "utf-8")
console.log(text)

writeFileSync("./pathtesting/path.txt", "This is a text written from a node program.", {flag:"a"})