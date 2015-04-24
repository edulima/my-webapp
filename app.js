var express = require('express');
var stormpath = require('express-stormpath');



var app = express();

app.set('views', './views');
app.set('view engine', 'jade');


var stormpathMiddleware = stormpath.init(app, {

    apiKeyFile: '/Users/eduardol/Documents/Projects/Node/stormpath_key/apiKey-4WPONVNUIS0GAWRLJ7B9SVQO1.properties',
    application: 'https://api.stormpath.com/v1/applications/2zLqZyeYFrTVxEb09gxsgh',
    secretKey: '2zLqZyeYFrTVxEb09gxsgh',
    expandCustomData: true,
    enableForgotPassword: true

});

app.get(stormpathMiddleware);

app.get('/', function(req, res){
    res.render('home', {
       title: 'Welcome'
    });

});

app.listen(3000);
