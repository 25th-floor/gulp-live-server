var express = require('express')
var cors = require('cors')
var app = express()
var path = require('path');
var connect_livereload = require('connect-livereload');
var serve_static = require('serve-static');

var args = Array.prototype.slice.call(process.argv, 2, 4);
var root = args[0] || 'build/';
var port = args[1] || 3000;

app.use(cors());
app.use(connect_livereload());

app.options('*', cors()) // enable pre-flight request for DELETE request

root.split(",").forEach(function(r){
    app.use(serve_static(path.join(process.cwd(), r)));
});

app.listen(port, function () {

    var host = 'localhost';

    console.log('folder "%s" serving at http://%s:%s', root, host, port);
});