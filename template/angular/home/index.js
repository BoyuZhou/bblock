var angular = require('angular');
var homeController = require('home.controller');

module.exports = angular
    .module('home', [])
    .controller('homeController', homeController)
    .name;