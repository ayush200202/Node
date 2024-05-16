var path = require("path")

loc='C:/Users/vidya/OneDrive/Desktop/Node/aysncfile.txt'

loc1 ='C:/Users/vidya/OneDrive/Desktop/Node/'

path1= path.basename(loc)

console.log(path1)

// basename (path) it will return last path wi

// basename(path,ext)

path2=path.basename(loc,'.txt')

console.log(path2)

path3=path.basename('C:/Users/vidya/OneDrive/Desktop/Node') 
console.log(path3)

ext1= path.extname(loc)

console.log('extension is'+ext1)

ext2 = path.extname(loc1)

console.log('extension is'+ext2)