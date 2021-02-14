const fs = require('fs');

function writeFile(fileNamePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileNamePath, data, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File written successfully!'
      });
    });
  });
}

const copyFile = (fromDir, toDir) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(fromDir, toDir, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File copied successfully!'
      });
    });
  })
}

module.exports = { writeFile, copyFile };