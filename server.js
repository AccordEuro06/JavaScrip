var express = require("express");
var bodyParser = require("body-parser");
var server = express();
var jsonParser = bodyParser.json();
server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, responce) {
    console.log('Server is started !');
    responce.send("<h1>Server is started !</h1>")
});


server.get('/user-data?', function (request, responce) {
    console.log(request.query)

    var obj = request.query;
    obj.email = obj.userFirstName+obj.userLastName+'@gmail.com'
    responce.send('Your email address is :'+ obj.email);
});

server.listen(3001);