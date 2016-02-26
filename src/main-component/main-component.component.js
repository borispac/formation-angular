(() => {
    'use strict';

    let mainComponent = {
        templateUrl: 'main-component/main-component.html',
        controller: 'mainComponentController'
    };

    angular
        .module('main-component').component('mainComponent', mainComponent);
})();
