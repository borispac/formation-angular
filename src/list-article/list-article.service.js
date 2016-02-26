(() => {
    'use strict';

    angular
        .module('list-article')
        .service('articleService', articleService);

    /** @ngInject */
    function articleService($http, categoryService) {
        this.getListArticle = () => {
            return $http.get('http://mini-cms.cleverapps.io/otherUser/articles')
                .then(response => {
                    return _.map(response.data, (p_article) => {
                        p_article.category = {
                            name: 'test'
                        };
                        categoryService.getCategory(p_article.categoryId).then((p_category) => {
                            p_article.category = p_category;
                        })
                        return p_article;
                    });
                });
        };

        this.deleteArticle = (p_article) => {
            return $http.delete('http://mini-cms.cleverapps.io/otherUser/articles/'+p_article.id);
        };

        this.updateArticle = (p_article) => {
            return $http.put('http://mini-cms.cleverapps.io/otherUser/articles/'+p_article.id, p_article);
        };
    };
})();
