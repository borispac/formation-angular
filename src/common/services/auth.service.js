// ToDo : stock session storage
(() => {
    'use strict';

    angular
        .module('blog')
        .service('authService', authService);

    /** @ngInject */
    function authService($q) {
        this.isConnected = false;
        this.userConnected = '';
        this.authentifaction = (p_user, p_password) =>{
            if (p_user === 'otherUser' && p_password ==='1234'){
                this.userConnected = p_user;
                this.isConnected = true;
                return $q.when(true);
            }
            return $q.reject(false);
        };
    };
})();
