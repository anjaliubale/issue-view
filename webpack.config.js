var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'issue-view.js',
        libraryTarget: 'var',
        library: 'IssueView'
    }
};