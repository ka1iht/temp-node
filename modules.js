const sayHello = require("./modules_sayhi.js")
const names = require("./modules_variables.js")
const alt = require("./modules_alt")

console.log(alt.peep.name)

const sum = require("./modules_function")

sayHello("Thilak")
sayHello(names.Jai)
sayHello(names.Prags)

sum()