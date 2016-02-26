(() => {
    'use strict';

    let categoryName = {
        templateUrl: 'list-article/category-name/category-name.html',
        bindings: {
            categoryLinked: '<',
            editMod: '<'
        },
        controller: 'categoryController'
    };

    angular
        .module('category-name').component('categoryName', categoryName);
})();
