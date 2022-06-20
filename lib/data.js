const fs = require('fs');
const path = require('path');

const lib = {};
lib.basedir = path.join(__dirname, '/../.data/');
// CREATE
lib.create = (dir, file, data, callback) => {
  fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const stringData = JSON.stringify(data);

      fs.writeFile(fileDescriptor, stringData, (err2) => {
        if (!err2) {
          fs.close(fileDescriptor, (err3) => {
            if (!err3) {
              callback(false);
            } else {
              callback('Error closing ');
            }
          });
        } else {
          callback('Error writing to new file');
        }
      });
    } else {
      callback('there was an error , file may alredy exists!');
    }
  });
};
// READ DATA
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
    callback(err, data);
  });
};
// UPDATED DATA
lib.update = (dir, file, data, callback) => {
  fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const stringData = JSON.stringify(data);
      fs.ftruncate(fileDescriptor, (err1) => {
        if (!err1) {
          fs.writeFile(fileDescriptor, stringData, (err2) => {
            if (!err2) {
              file.close(fileDescriptor, (err3) => {
                if (!err3) {
                  callback(false);
                } else {
                  callback('Error closing file');
                }
              });
            } else {
              callback('Error writinh to file');
            }
          });
        } else {
          console.log('Error truncating file');
        }
      });
    } else {
      console.log('error updating ');
    }
  });
};
// DELETE DATA
lib.delete = (dir, file, callback) => {
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback('error deleting file');
    }
  });
};

module.exports = lib;
