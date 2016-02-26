(() => {
    'use strict';

    angular
        .module('main-component').controller('mainComponentController', mainComponentController);

    /** @ngInject */
    function mainComponentController($q, $mdToast, categoryService, articleService) {
        var articlesListResult;
        var categoryToFilter = [];

        // Peut etre déplacé dans le articleService
        var filterArticleByCategory = (p_articles, p_categories) => {
            var categoriesId = [];

            for (var le_i = 0; le_i < p_categories.length; le_i++) {
                categoriesId.push(p_categories[le_i].id);
            }

            return _(p_articles).filter((p_article) => {
                return _(categoriesId).contains(p_article.categoryId);
            });
        };

        // Promises queue
        let categoryServiceProvide = categoryService.getCategories().then((p_categories) => {
            this.categories = p_categories;
            categoryToFilter = p_categories;
        });

        let articleServiceProvide = articleService.getListArticle().then((p_articles) => {
            articlesListResult = p_articles;
        });

        // Init
        $q.all([categoryServiceProvide, articleServiceProvide]).then((results) => {
            this.articles = filterArticleByCategory(articlesListResult, categoryToFilter);
        });

        // Callback
        this.categoryCallback = (p_categories) => {
            categoryToFilter = p_categories;
            this.articles = filterArticleByCategory(articlesListResult, categoryToFilter);
        };

        this.deleteArticleCallback = (p_article) => {
            articleService.deleteArticle(p_article).then(() => {
                var idx = articlesListResult.indexOf(p_article);
                if(idx > -1){
                    articlesListResult.splice(idx,1);
                };
                this.articles = filterArticleByCategory(articlesListResult, categoryToFilter);
                $mdToast.show($mdToast.simple().textContent('Card : '+p_article.titre+' deleted.'));

            }).catch((response) => {
                console.log(response);
                // alert(response);
            });
        };

        this.validArticleCallback = (p_article) => {
            articleService.updateArticle(p_article).then(() => {
                $mdToast.show($mdToast.simple().textContent('Card : '+p_article.titre+' updated.'));

            }).catch((response) => {
                console.log(response);
                // alert(response);
            });
        };
    };
})();
