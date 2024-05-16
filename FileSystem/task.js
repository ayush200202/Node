let fs=require("fs")

//perform following task 
//1 create a folder name myfiles using fs module 
//2 creat a file name subjects and wite the subjects names 
//3 add a new subject in the file
//4 read all subject data from the file without buffer data and without buffer data  
//5 rename the file to subject list file
//6 delete the file 
//7 delete the folder myfile using fs module


let data=["Maths","Science","Computer"]
let filename="subject.txt"
fs.writeFileSync(filename,data[0]);

for(var i=1;i<data.length;i++){
    fs.appendFileSync(filename," "+data[i]);
}

let buffdata = fs.readFileSync(filename,"utf-8")
console.log(buffdata);

newName = "subjectUpdated.txt"
fs.renameSync(filename,newName)

fs.unlinkSync(newName)




