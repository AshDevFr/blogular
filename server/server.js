/**
 * Module dependencies.
 */

var express    = require('express'),
    article    = require('./routes/article'),
    bodyParser = require('body-parser'),
    //methodOverride = require('method-override'),
    path       = require('path'),
    app        = express(),
    port       = process.env.SERVER_PORT || 9000;

// Configuration
app.set('port', port);
app.use(bodyParser());

//app.use(methodOverride());

app.get('/api/articles', article.findAll);
app.get('/api/articles/:id', article.findById);
app.post('/api/articles', article.addArticle);
app.put('/api/articles/:id', article.updateArticle);
app.delete('/api/articles/:id', article.deleteArticle);

module.exports = app;

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});