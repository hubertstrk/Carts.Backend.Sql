
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var cors = require('cors');
var cart = require('./routes/cart');
var items = require('./routes/item');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(cors());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/api/carts', cart.all);
app.get('/api/cart/:id', cart.cart);
app.delete('/api/cart/:id', cart.delete);
app.post('/api/cart', cart.add);
app.put('/api/cart/:id', cart.update);

app.get('/api/items/:id', items.all);
app.delete('/api/item/:id', items.delete);
app.put('/api/item/:id/:active', items.setState);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
