(() => {
    'use strict';

    angular
        .module('list-article')
        .service('categoryService', categoryService);

    /** @ngInject */
    function categoryService($http) {
        this.getCategory = (p_id) =>{
            return $http.get('http://mini-cms.cleverapps.io/otherUser/categories/'+p_id).then(response=>response.data);
        };
        
        this.getCategories = () =>{
            return $http.get('http://mini-cms.cleverapps.io/otherUser/categories/').then(response=>response.data);
        };
    };
})();
