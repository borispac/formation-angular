(() => {
    'use strict';

    angular
        .module('list-article').controller('listArticleController', listArticleController);

    /** @ngInject */
    function listArticleController($scope,  $mdDialog) {
        // Variables
        // ToDo implémenter la pagnination
        this.page = 0;

        // Watcher
        $scope.$watch(() => this.articles, () => {
            if (this.articles) {
                this.articlesCard = _(this.articles).map((p_article) => {
                    return {
                        article: p_article,
                        editMod: false
                    };
                });
            };
        });

        // DialogBox
        this.showConfirmDelete = function(ev, articleToDel) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this card '+articleToDel.titre+' ?')
                .textContent('')
                .ariaLabel('Delete')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('No')
                ;
            confirm._options.clickOutsideToClose = true;

            $mdDialog.show(confirm).then(() => {
                this.deleteArticleCallback(articleToDel);
            });
        };

        this.modEdit = (p_article)=>{
            p_article.editMod = true;
        };

        this.valid = (p_article)=>{
            p_article.editMod = false;
            this.validArticleCallback(p_article.article);
        };
    };

})();
