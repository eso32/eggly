module.exports = function(ngModule){
  ngModule.service('fetchArticles', function($http){
    return $http.get('./articles.json');
  })
}
