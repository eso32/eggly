const angular = require('angular');
const uirouter = require('./ui-router.js');
// const ngRoute = require('angular-route');
const ngModule = angular.module('eggly', ['ui.router']);
require('./index.scss');
require('bootstrap/dist/css/bootstrap.css');
require('animate.css/animate.css');

require('./common')(ngModule);
require('./homepage')(ngModule);
require('./startpage')(ngModule);
require('./config.js')(ngModule);
