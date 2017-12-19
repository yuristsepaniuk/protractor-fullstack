var express = require('express')
  , http = require('http')
  , path = require('path')
  , routes = require('./routes');
const bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 9000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '..', 'app')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/test', routes.index);

app.get('/pricing.html',function(req,res){

  console.log("Dirname:",__dirname)
  res.sendfile(path.join(__dirname, '..', 'app','views','pricing.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
