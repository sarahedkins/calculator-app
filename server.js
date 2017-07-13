const express = require('express');
const app = express();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const isDevelopment = process.env.NODE_ENV !== 'production';
if (isDevelopment) { // DEV SERVER
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(5000, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:5000');
  });
} else { // PRODUCTION SERVER
  app.set('port', (process.env.PORT || 5000));
  app.use(express.static(__dirname + '/public'));
  
  app.get('/', function(request, response) {
    response.render('index');
    // response.send('HELLO WORLD');
  });

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}
