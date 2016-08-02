var angular = require('angular');
var uiRouter = require('angular-ui-router');
var home = require('./home/index.js');
var router = require('./app.router');

require('bootstrap/dist/css/bootstrap.css');

angular
    .module('app', [uiRouter, home])
    .config(router);

