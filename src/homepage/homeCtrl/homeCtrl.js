module.exports = function(ngModule){
  ngModule.controller('homeCtrl', function(fetchArticles, result){
    var vm = this;
    // this.name = 'Home page!';
    // this.articles = fetchArticles.then(function(data){
    //   return data;
    // })
    this.articles = result.data;
    this.gimmeData = function(){
      fetchArticles.then(function(response){
        console.log(response.data);
        vm.articles = response.data;
      });
    }
  });
}
