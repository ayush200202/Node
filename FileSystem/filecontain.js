const fs = require('fs');

function listFilesInFolder(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    console.log(`Files in ${folderPath}:`);
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
  });
}

// Example usage: list files in the current folder
listFilesInFolder("C:\\Users\\vidya\\OneDrive\\Desktop\\Node");
