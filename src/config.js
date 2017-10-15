module.exports = function(ngModule) {
  ngModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: require('./views/home.html'),
        controller: 'homeCtrl as home',
        // abstract: true,
        resolve: {
          result: function(fetchArticles){
            return fetchArticles;
          }
        }
      })
      .state('home.list', {
        url: '/',
        template: require('./homepage/homeCtrl/list.html')
      })
      .state('home.stuff', {
        url: '/stuff',
        template: require('./homepage/homeCtrl/stuff.html')
      })
      .state('start', {
        url: '/start',
        template: require('./views/start.html'),
        controller: 'startCtrl as start'
      });
  }]);
};
