(() => {
    'use strict';

    let loginComponent = {
        templateUrl: 'login/login.html',
        controller: 'loginController'
    };

    angular
        .module('login').component('login', loginComponent);
})();
