const {runLoaders} = require('loader-runner');
const fs = require('fs');
const path = require('path');

runLoaders({
    resource: path.resolve(__dirname, 'src/demo.txt'),
    loaders: [
        path.resolve(__dirname, 'src/raw-loader.js')
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, function(err, result) {
    err ? console.log(err) : console.log(result)
})