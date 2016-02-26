(() => {
    'use strict';

    angular
        .module('menubar').controller('menubarController', menubarController);

    /** @ngInject */
    function menubarController($state) {
        this.gotoMenu = (p_menuToOpen) => {
            $state.go(p_menuToOpen);
        };
    };
})();
