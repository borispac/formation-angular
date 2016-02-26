(() => {
    'use strict';

    angular
        .module('category-name').controller('categoryController', categoryController);

    /** @ngInject */
    function categoryController(categoryService) {
        categoryService.getCategories().then((p_categories) => {
            this.categories = p_categories;
        });
    };
})();
