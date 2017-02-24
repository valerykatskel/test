var webpack = require('webpack');

module.exports =  {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    }
};