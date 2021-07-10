const path = require('path');
const readDirectory = require('./utils/readDir');
module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool:"inline-source-map",
    entry:readDirectory(path.join(__dirname, "src","components")),
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:"ts-loader"
            }
        ]
    },
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname, "dist")
    },
    resolve:{
        extensions:['.ts', '.js']
    },
    target:"web"
}