const eventEmitter = require("events")
const instance = new eventEmitter

instance.on('request', function(name, id){
    console.log(`The request event has been invoked successfully by ${name} with an id of ${id}`)
})

instance.on('request', function(){
    console.log(`More logic here`)
})

instance.emit('request', "Thilak", 74)