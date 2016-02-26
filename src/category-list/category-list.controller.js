(() => {
    'use strict';

    angular
        .module('category-list').controller('categoryListController', categoryListController);

    /** @ngInject */
    function categoryListController($scope) {
        // this.listCategoryActive = this.categories || [];

        $scope.$watch(() => {
            return this.categories;
        }, () => {
            if (this.categories) {
                this.categoriesExtended = _(this.categories).map((p_category) => {
                    return {
                        category: p_category,
                        selected: true
                    };
                });
            };
        });

        this.clickCategory = () => {

            var categoriesSelected = _(this.categoriesExtended).chain().filter((p_cat)=> p_cat.selected).map((p_cat)=>p_cat.category).value();

            this.selectCategoryCallback(categoriesSelected);
        };
    };
})();
