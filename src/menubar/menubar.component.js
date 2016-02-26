(() => {
    'use strict';

    let menubarComponent = {
        templateUrl: 'menubar/menubar.html',
        controller: 'menubarController'
    };

    angular
        .module('menubar').component('menubar', menubarComponent);
})();
