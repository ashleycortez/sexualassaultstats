var servi = require('servi');
var app = new servi(true);

port(1313);

route('/', requestHandler);

function requestHandler(request) {
    request.respond("Hello World");
}

start();