const {runLoaders} = require('loader-runner');
const fs = require('fs');
const path = require('path');

runLoaders({
    resource: path.resolve(__dirname, 'src/index.css'),
    loaders: [
        path.resolve(__dirname, 'src/index.js')
    ],
    readResource: fs.readFile.bind(fs)
}, function(err, result) {
    err ? console.log(err) : console.log(result)
})