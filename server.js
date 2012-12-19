#!/usr/bin/env node

/**
 * Server module exports method which returns new instance of application server
 *
 * @param {Object} params - railway/express webserver initialization params.
 * @returns RailwayJS powered express webserver
 */
var app = module.exports = function getServerInstance(params) {
    params = params || {};
    // specify current dir as default root of server
    params.root = params.root || __dirname;
    return require('compound').createServer(params);
};

if (!module.parent) {
    var port = process.env.PORT || 8888;
    //var host = process.env.HOST || "127.0.0.1";
    var server = app();
    server.listen(port);
    console.log(
        "stock server on %s",port);
}

