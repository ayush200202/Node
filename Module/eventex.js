var event = require("events")
const { EventEmitter } = require("stream")

const eventemitterobj = new EventEmitter()

//register
eventemitterobj.on('clickevent',()=>{
    console.log("Button is clicked more than 5sec")
})


//trigerring the event
eventemitterobj.emit('clickevent')

eventemitterobj.on('generateFullname',(firstname,lastname)=>{
    console.log("-----------------------------------")
    console.log(`welcome user ${firstname} ${lastname}`)
})

eventemitterobj.on('generateFullname',(firstname,lastname)=>{
    console.log("-----------------------------------")
    console.log(`Useremail : ${firstname}${lastname}@gmail.com`)
})

eventemitterobj.emit('generateFullname','Ayush','Vidyarthy')

