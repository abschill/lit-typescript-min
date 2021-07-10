const fs = require('fs')
const path = require('path')
const readDirectory = (_path)=>{
    const paths = [];
    fs.readdirSync(_path).filter((file) =>paths.push(path.resolve(_path, file)));
    return paths;
}
module.exports = readDirectory;