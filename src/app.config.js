(() => {
    'use strict';

    angular
        .module('blog')
        .config(config);

    /** @ngInject */
    function config($mdThemingProvider, highchartsNGProvider,authProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue');

        authProvider.init({
            domain: 'wisolv.auth0.com',
            clientID: 'js37Gu5iBEmVkr3Pv9dQFYP6TNOu9nZ4'
        });
    };

})();
