//perform following task 
//1 create a folder name myfiles using fs module 
//2 creat a file name subjects and wite the subjects names 
//3 add a new subject in the file
//4 read all subject data from the file without buffer data and without buffer data  
//5 rename the file to subject list file
//6 delete the file 
//7 delete the folder myfile using fs module


//Create Folder

let fs= require("fs")

const dir = __dirname+"/async"

fs.mkdir(dir,{recursive:true},(err)=>{
    if (err) {
        console.error(`Error creating directory: ${err.message}`);
      } else {
        console.log(`Directory '${dir}' has been created`);
      }
})

//create file

filename=__dirname+"/async/task2.txt"
let data=["Maths","Science","Computer"]

fs.writeFile(filename,data[0],(err)=>{
    if(err) throw err;
    console.log("Write Sucessfully");
});

for(var i=1;i<data.length;i++){
    fs.appendFile(filename," "+data[i],(err)=>{
        if(err) throw err;
        console.log("Updated");
    });
}

let buffdata = fs.readFile(filename,"utf-8",(err)=>{
    if(err) throw err;
    console.log("Reading");
})
console.log(buffdata);

newName = "subjectUpdatedAA.txt"
fs.rename(filename,newName,(err)=>{
    if(err) throw err;
    console.log("Renamed")
})


fs.unlink(newName,(err)=>{
    if(err) throw err;
    console.log("Deleted")
})


// fs.rmdir(dir,{recursive:true},(err)=>{
//     if (err) {
//         console.error(`Error deleting folder: ${err.message}`);
//       } else {
//         console.log(`Folder ${folderPath} has been deleted`);
//       }
// })


