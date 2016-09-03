var port = 9000;
var express = require('express');
var bodyParser = require('express/node_modules/body-parser');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:55495");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.get('/user', function(req, res){

    res.send({
        message: 'hello shimizacken!'
    });

});

app.post('/user', function(req, res){

    res.send({
        message: req.body.name + ' created successfuly!'
    });
});

app.put('/user', function(req, res){

    res.send({
        message: req.body.name + ' updated successfuly!'
    });
});

app.delete('/user', function(req, res){

    res.send({
        message: req.body.name + ' deleted successfuly!'
    });
});

app.listen(port, function(){
    console.log('Example app listening on port: ' + port);
});