(() => {
    'use strict';

    angular
        .module('login').controller('loginController', loginController);

    /** @ngInject */
    function loginController($timeout, $state, authService,auth, store) {
        this.auth = () => {
            auth.signin({}, function (profile, token) {
              // Success callback
              store.set('profile', profile);
              store.set('token', token);
              $state.go('main');
        }, function (error) {
              // Error callback
              console.log(error);
            });
        };
    };
})();
