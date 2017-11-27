/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var errorHandler = require('errorhandler');
var logger = require('morgan');
var lessExpress = require('less-express');


// This should refer to the local React and gets installed via `npm install` in
// the example.
var reactViews = require('express-react-views');

var app = express();

// all environments
app.set('port', process.env.DBWEBB_PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.locals.something = 'value';
app.locals.qaz = 'qut';

app.get('/css/style.css', lessExpress('./public/stylesheets/style.less'));
app.get('/api/match_history/user/:id', routes.matchHistory);
app.get('/api/test', routes.test);
app.get('/api/stats', routes.stats);
app.get('*', routes.standard);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
