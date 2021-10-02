const path = require("path")
console.log(path.sep)
const filepath = path.join("./pathtesting", "subfolder", "text.txt")
console.log(path.basename(filepath));
console.log(path.resolve(__dirname, "pathtesting", "subfolder", "text.txt"))