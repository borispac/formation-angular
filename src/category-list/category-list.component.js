(() => {
    'use strict';

    let categoryList = {
        templateUrl: 'category-list/category-list.html',
        controller: 'categoryListController',
        bindings:{
            categories:"<",
            selectCategoryCallback: "="
        }
    };

    angular
        .module('category-list').component('categoryList', categoryList);
})();
