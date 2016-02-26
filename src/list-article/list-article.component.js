(()=>{
    'use strict';

    let listArticleComponent = {
      templateUrl : 'list-article/list-article.html',
      controller : 'listArticleController',
      bindings:{
          articles:"<",
          deleteArticleCallback: "=",
          validArticleCallback: "="
      }
    };

    angular
      .module('list-article').component('listArticle', listArticleComponent);

})();
