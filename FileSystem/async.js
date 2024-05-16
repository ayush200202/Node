let fs = require("fs")

filename="aysncfile.txt"

data="callback function"

fs.writeFile(filename,data,(err)=>{
    if(err) throw err;
    console.log("File written successfully");
})

console.log("--------------------------")

//append
// data2="\nHello Guys"
// fs.appendFile()