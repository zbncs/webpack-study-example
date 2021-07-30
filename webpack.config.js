const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve(__dirname, 'loaders/a-loader.js'),
                    path.resolve(__dirname, 'loaders/b-loader.js'),
                ]
            }
        ]
    }
}